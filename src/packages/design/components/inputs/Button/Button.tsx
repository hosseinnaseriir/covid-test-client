"use client"
import { forwardRef, type ForwardRefRenderFunction } from 'react';
import { Button as MuiButton } from '@mui/material';

import { ButtonProps } from './types';
import { useRouter } from 'next/navigation';

const ButtonComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, onClick, href, loading, ...restProps }, ref) => {

  const router = useRouter()
  return (

    <MuiButton
      onClick={(_event) => {
        if (href) {
          router.push(href)
        }
        onClick?.(_event)
      }}
      {...restProps}
      ref={ref}
      disabled={loading}
      startIcon={<span>{restProps.startIcon}</span>}
      endIcon={<span>{restProps.endIcon}</span>}
    >
      {!!loading ? '...' : children}
    </MuiButton>
  );
};

export const Button = forwardRef(ButtonComponent);
