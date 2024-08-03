import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useRouter } from 'next/navigation';
import { createRegex } from '@/packages/helpers';
import { useVerifyUser } from '@/packages/api/services/authentication/loginService';
import { formErrorHandler } from '@/packages/api';
import toast from 'react-hot-toast';
import { useRoutes } from '@/packages/routes';
import Cookies from 'js-cookie'

const PASSWORD_REG = createRegex('password');
const LOGIN_SCHEMA = z.object({
  username: z.string(),
  password: z.string().regex(PASSWORD_REG, {
    message: 'Choose Stronger password!',
  }),
});

type LoginSchemaType = z.infer<typeof LOGIN_SCHEMA>;

export const useLoginModule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<LoginSchemaType>({ resolver: zodResolver(LOGIN_SCHEMA) });
  const router = useRouter();
  const ROUTES = useRoutes();

  const { mutate: verifyUserMutate, isPending: isLoading } = useVerifyUser({
    mutation: {
      onError(ex) {
        formErrorHandler({
          ex,
          setError
        })
      },
      onSuccess: (data) => {
        toast.success(data.message);
        Cookies.set(process.env.NEXT_PUBLIC_TOKEN_KEY!, data.token)
        router.push(ROUTES.ROOT);
      }
    },

  })

  const onSubmitLogin = (_event: FormEvent) => {
    return handleSubmit((data) => {
      verifyUserMutate({
        data
      })
    })(_event);
  };


  return {
    errors,
    register,
    setError,
    onSubmitLogin,
    isLoading,
    isValid: !isDirty || !isValid,
  };
};
