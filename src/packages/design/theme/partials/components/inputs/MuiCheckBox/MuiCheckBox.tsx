import { StylePropsType } from '@design';
import { CheckboxProps, Components } from '@mui/material';

export const MuiCheckbox: Components['MuiCheckbox'] = {
  styleOverrides: {
    root: ({ theme }: StylePropsType<CheckboxProps>) => ({
      padding: theme.spacing(0),
    }),
  },
};
