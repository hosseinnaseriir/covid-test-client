import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { createRegex } from '@helpers';
import { formErrorHandler, useRegisterUser } from '@api';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useRoutes } from '@/packages/routes';

const PASSWORD_REG = createRegex('password');
const REGISTER_SCHEMA = z.object({
  fullName: z.string(),
  username: z.string(),
  password: z.string().regex(PASSWORD_REG, {
    message: 'Choose Stronger password!',
  }),
  repeatPassword: z.string().regex(PASSWORD_REG, {
    message: 'Choose Stronger password!',
  }),
});

type RegisterSchemaType = z.infer<typeof REGISTER_SCHEMA>;

export const useRegisterModule = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setError,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(REGISTER_SCHEMA) });
  const router = useRouter()
  const ROUTES = useRoutes();

  const { mutate: verifyUserMutate, isPending: isLoading } = useRegisterUser({
    mutation: {
      onError(ex) {
        formErrorHandler({
          ex,
          setError
        })
      },
      onSuccess: (data) => {
        toast.success(data.message)
        router.push(ROUTES.AUTH.LOGIN);
      }
    }
  })

  const onSubmitRegister = (_event: FormEvent) => {
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
    onSubmitRegister,
    isLoading,
    isValid: !isDirty || !isValid,
  };
};
