import type { ForwardRefRenderFunction } from 'react';
import { forwardRef } from 'react';

import {
  Body2,
  Box,
  InputLabel,
  DefaultMuiTextField,
  WidgetRenderer,
} from '@design';
import type { InputTextProps } from './types';

const TextFieldComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  InputTextProps
> = ({ requiredStar, information, parentSx, ...props }, ref) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'max-content',
        ...parentSx,
      }}
    >
      {props.label && (
        <InputLabel
          error={props.error}
          sx={{
            ...(props.disabled
              ? { color: (theme) => theme.palette.grey[500] }
              : {}),
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {props.label}
          {requiredStar && (
            <Body2 color='error' sx={{ px: 0.5 }} component='span'>
              *
            </Body2>
          )}
        </InputLabel>
      )}
      <DefaultMuiTextField
        ref={ref}
        {...props}
        label={null}
        InputLabelProps={{
          shrink: false,
        }}
        helperText={
          props.helperText && (
            <WidgetRenderer startWidget={'!'}>
              {props.helperText}
            </WidgetRenderer>
          )
        }
      />
    </Box>
  );
};

export const InputText = forwardRef(TextFieldComponent);
