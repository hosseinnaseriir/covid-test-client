import type { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import type { MuiTextFieldProps, SxProps } from '@design';

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
  helperText?: string;
  type?: MuiTextFieldProps['type'];
  requiredStar?: boolean;
  information?: ReactNode;
  parentSx?: SxProps;
  validation?: UseFormRegisterReturn<any>;
}
