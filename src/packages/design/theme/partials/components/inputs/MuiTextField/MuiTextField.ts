import { StylePropsType } from '@design';
import {
  Components,
  inputBaseClasses,
  inputLabelClasses,
  selectClasses,
  TextFieldProps,
} from '@mui/material';

export const MuiTextField: Components['MuiTextField'] = {
  defaultProps: {
    size: 'medium',
    margin: 'normal',
    fullWidth: true,
  },
  styleOverrides: {
    root: ({ theme }: StylePropsType<TextFieldProps>) => ({
      margin: 0,
      textAlign: 'start',
      borderRadius: theme.spacing(0.5),
      [`.${inputBaseClasses.root}`]: {
        ...theme.typography.body2,
        border: `${theme.spacing(0.25)} solid transparent`,
        fontSize: theme.spacing(2),
        backgroundColor: theme.palette.secondary.light,
        '&:focus-within': {
          border: `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`,
        },
      },
      input: {
        ...theme.typography.body2,
        borderRadius: theme.spacing(0.5),
      },
    }),
  },
  variants: [
    {
      props: {
        error: true,
      },
      style: ({ theme }: StylePropsType<TextFieldProps>) => ({
        [`.${inputBaseClasses.root}`]: {
          border: `${theme.spacing(0.25)} solid ${
            theme.palette.error.main
          }!important`,
        },
      }),
    },
    {
      props: { size: 'medium', variant: 'outlined', select: false },
      style: ({ theme }: StylePropsType<TextFieldProps>) => ({
        [`.${inputLabelClasses.root}`]: {
          ...theme.typography.body2,
        },
        [`& .${selectClasses.icon}`]: {
          fontSize: theme.spacing(2.5),
          marginInlineEnd: theme.spacing(0.5),
        },
        input: {
          paddingBlock: theme.spacing(1.245),
          paddingInline: theme.spacing(1.5),
        },
        fieldset: {
          display: 'none',
        },
      }),
    },
  ],
};
