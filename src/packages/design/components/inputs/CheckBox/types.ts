import type { ReactNode } from 'react';
import type { CheckboxProps } from '@mui/material';

export interface CheckboxComponentProps extends Omit<CheckboxProps, 'color'> {
  label?: ReactNode;
  disabled?: CheckboxProps['disabled'];
  checked?: CheckboxProps['checked'];
  size?: CheckboxProps['size'];
  color?: 'primary';
}
