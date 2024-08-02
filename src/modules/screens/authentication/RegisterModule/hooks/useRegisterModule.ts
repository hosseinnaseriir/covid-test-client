import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { createRegex } from '@helpers';
import { useVerifyUser } from '@api';

const PASSWORD_REG = createRegex('password');
const REGISTER_SCHEMA = z.object({
  fullname: z.string(),
  username: z.string(),
  password: z.string().regex(PASSWORD_REG, {
    message: 'Choose Stronger password!',
  }),
  repeat_password: z.string().regex(PASSWORD_REG, {
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

  const { mutate: verifyUserMutate, isPending } = useVerifyUser()

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
    isPending,
    isValid: !isDirty || !isValid,
  };
};