'use client'

import { Components, inputBaseClasses, TextFieldProps } from '@mui/material';

import { InputTextProps } from '@design';
import { StylePropsType } from '@design/theme';

export const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    size: 'medium',
    margin: 'normal',
  },
  styleOverrides: {
    root: ({ theme }: StylePropsType<TextFieldProps>) => ({
      ...theme.typography.body2,
      margin: 0,
      boxSizing: 'border-box',
      width: '100%',
      fieldset: {
        display: 'none',
      },
      label: {
        margin: 0,
      },
      input: {
        padding: `${theme.spacing(1.2)} ${theme.spacing(1.5)}`,
        ...theme.typography.body2,
      },
      [`.${inputBaseClasses.root}`]: {
        paddingLeft: 0,
        borderRadius: theme.spacing(1),
        border: `${theme.spacing(0.125)} solid ${theme.palette.grey[300]}`,
        '&:hover': {
          border: `${theme.spacing(0.125)} solid ${theme.palette.grey[600]}`,
        },
        '&:focus-within': {
          boxShadow: `0px 0px 0px 4px #F18E2E40`,
          border: `${theme.spacing(0.125)} solid ${theme.palette.primary.main}`,
        },
      },
      [`& .${inputBaseClasses.adornedStart}`]: {
        '& svg': {
          margin: theme.spacing(1),
        },
      },
      [`& .${inputBaseClasses.inputAdornedStart}`]: {
        paddingInlineStart: `${theme.spacing(1)} `,
        '& svg': {
          margin: theme.spacing(1),
        },
      },
    }),
  },
  variants: [
    {
      props: {
        error: true,
      },
      style: ({ theme }: StylePropsType<InputTextProps>) => ({
        [`.${inputBaseClasses.root}`]: {
          border: `${theme.spacing(0.125)} solid ${theme.palette.error.main}`,
          '&:focus-within': {
            boxShadow: `0px 0px 0px 4px rgba(239, 68, 68, 0.25)`,
            border: `${theme.spacing(0.125)} solid ${theme.palette.line.error}`,
          },
        },
      }),
    },
    {
      props: {
        size: 'small',
      },
      style: ({ theme }: StylePropsType<InputTextProps>) => ({
        ...theme.typography.body2,
        paddingLeft: theme.spacing(1),
        input: {
          padding: `${theme.spacing(1)}`,
        },
      }),
    },
    {
      props: {
        multiline: true,
      },
      style: ({ theme }: StylePropsType<InputTextProps>) => ({
        [`.${inputBaseClasses.root}`]: {
          padding: `${theme.spacing(1.5)}`,
        },
      }),
    },
    {
      props: {
        disabled: true,
      },
      style: ({ theme }: StylePropsType<InputTextProps>) => ({
        [`.${inputBaseClasses.root}`]: {
          border: `${theme.spacing(0.125)} solid ${theme.palette.grey[300]}`,
          borderRadius: theme.spacing(1),
          '& input': {
            color: `${theme.palette.text.secondary}!important`,
            textFillColor: 'initial',
          },

          background: theme.palette.grey[100],
          '&:hover': {
            border: `${theme.spacing(0.125)} solid ${theme.palette.grey[300]}`,
          },
        },
      }),
    },
  ],
};
