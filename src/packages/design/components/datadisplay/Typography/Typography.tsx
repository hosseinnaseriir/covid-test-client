import type { FC } from 'react';
import { Typography as MuiTypography } from '@mui/material';

import type { TypographyProps } from './types';

export const Typography: FC<TypographyProps> = (props) => {
  const { children, ...rest } = props;
  return <MuiTypography {...rest}>{children}</MuiTypography>;
};
