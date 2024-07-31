import { StylePropsType } from '@design';
import { type ButtonProps, type Components } from '@mui/material';

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    size: 'medium',
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
  },
  styleOverrides: {
    root: ({ theme }: StylePropsType<ButtonProps>) => {
      return {
        paddingBlock: theme.spacing(1.375),
        ...theme.typography.button2,
        borderRadius: 6,
        justifyContent: 'space-between',
        textTransform: 'math-auto',
      };
    },
  },
  variants: [

    {
      props: {
        variant: 'outlined',
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => {
        return {
          border: `${theme.spacing(0.125)} solid ${theme.palette.text.disabled
            }`,
          color: theme.palette.common.black,
        };
      },
    },
    {
      props: {
        variant: 'text',
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        color: theme.palette.common.black,
      }),
    },
    {
      props: {
        size: 'medium',
      },
      style: {
        maxHeight: 44,
      },
    },
    {
      props: {
        disabled: true,
      },
      style: ({ theme }: StylePropsType<ButtonProps>) => ({
        background: `${theme.palette.text.disabled}!important`,
        color: `${theme.palette.text.secondary}!important`,
      }),
    },
  ],
};
