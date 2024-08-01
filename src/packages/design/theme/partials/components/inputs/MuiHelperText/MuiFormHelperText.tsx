
'use client'
import { Components, FormHelperTextProps } from '@design';
import type { StylePropsType } from '@design/theme';

export const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: ({ theme }: StylePropsType<FormHelperTextProps>) => ({
      fontSize: theme.spacing(1.5),
      textAlign: 'start',
      marginLeft: '0 !important',
      paddingTop: theme.spacing(0.75),
    }),
  },
};
