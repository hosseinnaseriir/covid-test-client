import type { Components, ContainerProps } from '@mui/material';

import { StylePropsType } from '@/packages/design/theme/types';


export const MuiContainer: Components['MuiContainer'] = {
  styleOverrides: {
    root: ({ theme }: StylePropsType<ContainerProps>) => ({
      paddingInline: theme.spacing(2),
    }),
  },
};
