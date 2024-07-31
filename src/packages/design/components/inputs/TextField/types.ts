import type { ReactNode } from 'react';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';

export interface InputTextProps
  extends Pick<
    MuiTextFieldProps,
    Exclude<keyof MuiTextFieldProps, 'variant' | 'label'>
  > {
  success?: boolean;
  label?: ReactNode;
  disabled?: boolean;
  error?: MuiTextFieldProps['error'];
  variant?: 'outlined' | 'filled';
  helperText?: ReactNode | string;
  type?: MuiTextFieldProps['type'];
}
