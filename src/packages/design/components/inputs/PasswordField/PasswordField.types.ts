import { UseFormRegisterReturn } from 'react-hook-form';

import { InputTextProps } from '@design';

export interface PasswordFieldProps extends InputTextProps {
  validation?: UseFormRegisterReturn<'password' | 'repeat_password'>;
}
