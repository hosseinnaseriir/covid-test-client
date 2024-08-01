import type { ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps & {
  title?: ReactNode;
  loading?: boolean;
};
