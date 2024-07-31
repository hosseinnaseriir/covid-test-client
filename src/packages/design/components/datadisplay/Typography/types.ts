import type { TypographyProps as MuiTypographyProps } from '@mui/material';

export type TypographyProps = MuiTypographyProps & {
  component?: 'h1' | 'h2' | 'p' | 'span' | 'div';
};
