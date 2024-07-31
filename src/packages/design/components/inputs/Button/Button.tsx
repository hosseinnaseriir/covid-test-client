import { forwardRef, type ForwardRefRenderFunction } from 'react';
import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from './types';

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, ...restProps }, ref) => {
  return (
    <MuiButton
      {...restProps}
      ref={ref}
      startIcon={<span>{restProps.startIcon}</span>}
      endIcon={<span>{restProps.endIcon}</span>}
    >
      {restProps.loading ? '...' : children}
    </MuiButton>
  );
};

export const Button = forwardRef(ButtonComponent);
