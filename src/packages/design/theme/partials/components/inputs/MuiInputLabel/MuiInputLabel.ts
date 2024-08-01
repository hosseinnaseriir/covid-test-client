'use client'
import type { CSSProperties } from 'react';
import { Components, inputLabelClasses, InputLabelProps } from '@mui/material';

import type { StylePropsType } from '@design/theme';
export const MuiInputLabel: Components['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }: StylePropsType<InputLabelProps>) => ({
      margin: '0',
      maxWidth: '100% !important',
      ...theme.typography.body2,
      fontWeight: 400,
      color: theme.palette.grey[600],
      [`&.${inputLabelClasses.disabled}`]: {
        color: theme.palette.text.disabled,
      },
      [`&.${inputLabelClasses.focused}`]: {
        color: theme.palette.text.primary,
      },
      [`&.${inputLabelClasses.error}`]: {
        color: theme.palette.text.secondary,
      },
      position: 'relative !important' as CSSProperties['position'],
      transform: 'none !important',
      marginBottom: theme.spacing(0.75),
      pointerEvents: 'initial',
    }),
  },
  variants: [
    {
      props: {
        error: true,
      },
      style: ({ theme }: StylePropsType<InputLabelProps>) => ({
        color: theme.palette.line.error + '!important',
      }),
    },
  ],
};
