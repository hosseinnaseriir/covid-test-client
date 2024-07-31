import type { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';
import { TextField as MuiTextField } from '@mui/material';

import type { InputTextProps } from './types';
const TextFieldComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  InputTextProps
> = (props, ref) => {
  return (
    <MuiTextField
      ref={ref}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};

export const TextField = forwardRef(TextFieldComponent);
