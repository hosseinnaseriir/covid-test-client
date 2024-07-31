'use client'
import type { CSSProperties } from 'react';
import type { Components, InputLabelProps } from '@mui/material';
import { inputLabelClasses } from '@mui/material';
import { StylePropsType } from '@/packages/design/theme/types';


export const MuiInputLabel: Components['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }: StylePropsType<InputLabelProps>) => ({
      maxWidth: '100%!important',
      ...theme.typography.subtitle2,
      [`&.${inputLabelClasses.disabled}`]: {
        color: theme.palette.text.primary,
      },
      [`&.${inputLabelClasses.focused}`]: {
        color: theme.palette.text.primary,
      },
      [`&.${inputLabelClasses.error}`]: {
        color: theme.palette.text.primary,
      },
      position: 'relative !important' as CSSProperties['position'],
      transform: 'none !important',
      marginBottom: theme.spacing(0.75),
      pointerEvents: 'initial',
    }),
    outlined: {
      transform: 'translate(14px, 6px) scale(1)',
      [`&.${inputLabelClasses.shrink}`]: {
        transform: 'translate(14px, -12px) scale(0.75)',
      },
      [`&.${inputLabelClasses.sizeSmall}`]: {
        transform: 'translate(14px, 4px) scale(1)',
        [`&.${inputLabelClasses.shrink}`]: {
          transform: 'translate(14px, -10px) scale(0.75)',
        },
      },
    },
    asterisk: ({ theme }: StylePropsType<InputLabelProps>) => ({
      marginLeft: theme.spacing(0.5),
      color: 'inherit',
    }),
  },
};
