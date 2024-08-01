import { ReactNode } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

import type { MuiTextFieldProps, SelectProps } from '@design';
export interface SelectComponentProps
  extends Omit<MuiTextFieldProps & SelectProps, 'variant'> {
  outline?: boolean;
  helperText?: string;
  error?: MuiTextFieldProps['error'];
  fullWidth?: MuiTextFieldProps['fullWidth'];
  disabled?: MuiTextFieldProps['disabled'];
  success?: boolean;
  chip?: boolean;
  requiredStar?: boolean;
  information?: ReactNode;
  field?: ControllerRenderProps<any, any>;
}
