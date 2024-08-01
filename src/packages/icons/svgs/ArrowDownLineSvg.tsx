import { FunctionComponent } from 'react';

import { SvgIconProps } from '@design';
import { SvgTemplete } from '@icons';

export const ArrowDownLineSvg: FunctionComponent<SvgIconProps> = (props) => {
  return (
    <SvgTemplete {...props}>
      <svg
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M9.99959 10.9763L14.1244 6.85156L15.3029 8.03007L9.99959 13.3334L4.69629 8.03007L5.87481 6.85156L9.99959 10.9763Z'
          fill={props.fill ?? '#80848B'}
        />
      </svg>
    </SvgTemplete>
  );
};
