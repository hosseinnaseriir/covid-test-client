'use client'
import { loadingButtonClasses } from '@mui/lab';
import {
  buttonClasses,
  type ButtonProps,
  type Components,
  type ComponentsVariants,
  CSSObject,
} from '@mui/material';

import { StylePropsType } from '@design';
const colors = ['secondary', 'primary', 'error', 'success'] as const;

const variations: ComponentsVariants['MuiButton'] = colors.flatMap((color) => {
  return [
    {
      props: {
        variant: 'contained',
        color: color,
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        color: theme.palette.text.primary,
        [`.${loadingButtonClasses.loadingIndicator}`]: {
          color: theme.palette[color].main,
        },
        '&:hover': {
          backgroundColor: theme.palette[color].main,
        },
        '&:active': {
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.text.primary,
        },
      }),
    },
    {
      props: {
        variant: 'text',
        color: color,
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        color: theme.palette[color].main,
        [`.${loadingButtonClasses.loadingIndicator}`]: {
          color: theme.palette[color].main,
        },
        '&:hover': {
          backgroundColor: 'inherit',
        },
      }),
    },
    {
      props: {
        variant: 'outlined',
        color: color,
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        color: theme.palette[color].main,
        borderColor: theme.palette[color].main,
        '& path': {
          fill: theme.palette[color].main,
        },
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
          borderColor: theme.palette[color].main,
        },
        [`.${loadingButtonClasses.loadingIndicator}`]: {
          color: theme.palette[color].main,
        },
      }),
    },
  ] as const;
});

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    size: 'medium',
    variant: 'outlined',
    color: 'inherit',
  },
  styleOverrides: {
    // @ts-ignore
    root: ({ theme }: StylePropsType<ButtonProps>) => ({
      minWidth: 'max-content',
      textTransform: 'none!important',
      [`&.${loadingButtonClasses.root}`]: {
        textTransform: 'none!important',
      },
      [`&.${loadingButtonClasses.loading}`]: {
        backgroundColor: theme.palette.primary.main,
      },
      fontWeight: 500,
      [`&.${buttonClasses.focusVisible}`]: {
        color: theme.palette.text.primary,
      },
    }),
  },
  variants: [
    {
      props: {
        variant: 'contained',
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        color: `${theme.palette.common.white} !important`,
      }),
    },
    {
      props: {
        variant: 'outlined',
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        color: theme.palette.text.primary,
        borderColor: theme.palette.grey[200],
        '&:hover': {
          backgroundColor: theme.palette.grey[100],
          borderColor: theme.palette.grey[400],
        },
      }),
    },
    {
      props: {
        size: 'medium',
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        ...(theme.typography.button2 as CSSObject),
        padding: `${theme.spacing(1.2)} ${theme.spacing(1.5)}`,
        borderRadius: theme.spacing(1),
      }),
    },
    {
      props: {
        size: 'large',
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        ...(theme.typography.button1 as CSSObject),
        paddingTop: theme.spacing(1.75),
        paddingBottom: theme.spacing(1.75),
      }),
    },
    {
      props: {
        disabled: true,
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        backgroundColor: `${theme.palette.primary.light}!important`,
      }),
    },
    ...variations,
  ],
};
