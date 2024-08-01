
import { forwardRef, type ForwardRefRenderFunction } from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

import { CheckboxComponentProps } from './types';

const CheckBoxComponent: ForwardRefRenderFunction<
  HTMLButtonElement,
  CheckboxComponentProps
> = ({ label, ...props }, ref) => {
  return (
    <FormControlLabel
      sx={{
        mx: 0,
        gap: 1.5,
        alignItems: 'flex-start',
      }}
      label={label}
      control={
        <MuiCheckbox
          ref={ref}
          {...props}
          sx={{
            ...props.sx,
            mt: 0.5,
          }}
        />
      }
    />
  );
};

export const CheckBox = forwardRef(CheckBoxComponent);
