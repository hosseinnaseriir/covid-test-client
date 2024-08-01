import type { SxProps, Theme as MuiTheme } from '@mui/material';

export type ThemeProps = {
  mode?: 'light' | 'dark' | 'custom';
};

export type StylePropsType<T> = {
  ownerState?: T;
  theme: MuiTheme | any;
};

export type Theme = MuiTheme;

export type StylesType = {
  [key: string]: SxProps<Theme>;
};
