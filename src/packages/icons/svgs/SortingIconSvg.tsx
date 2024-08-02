import { FunctionComponent } from 'react';

import { SvgIconProps } from '@design';
import { Box } from '@design';
import { SvgTemplete } from '@icons';

export const SortingIconSvg: FunctionComponent<
  SvgIconProps & { variant?: 'ASC' | 'DESC' | 'NONE' }
> = (props) => {
  return (
    <SvgTemplete {...props}>
      <Box
        sx={{
          '&:hover': {
            fill: (theme) => theme.palette.grey[500],
          },
        }}
        component='path'
        d='M6 16L2 12H10L6 16Z'
        fill={props.variant === 'ASC' ? '#9D632B' : '#AFB3B8'}
      />
      <Box
        sx={{
          '&:hover': {
            fill: (theme) => theme.palette.grey[500],
          },
        }}
        component='path'
        d='M6 4L2 8H10L6 4Z'
        fill={props.variant === 'DESC' ? '#9D632B' : '#AFB3B8'}
      />
    </SvgTemplete>
  );
};
