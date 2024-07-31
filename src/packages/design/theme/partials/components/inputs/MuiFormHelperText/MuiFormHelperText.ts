import {
  formHelperTextClasses,
  FormHelperTextProps,
  svgIconClasses,
} from '@mui/material';

import { StylePropsType } from '@/packages/design/theme/types';

export const MuiFormHelperText = {
  styleOverrides: {
    root: ({ theme }: StylePropsType<FormHelperTextProps>) => ({
      ...theme.typography.caption,
      marginLeft: 0,
      marginRight: 0,
      marginTop: theme.spacing(0.75),
      display: 'flex',
      alignItems: 'center',
      gap: theme.spacing(1),

      [`&.${formHelperTextClasses.error}`]: {
        color: theme.palette.error.dark,

        [`.${svgIconClasses.root}`]: {
          color: theme.palette.error.main,
        },
      },
    }),
  },
};
