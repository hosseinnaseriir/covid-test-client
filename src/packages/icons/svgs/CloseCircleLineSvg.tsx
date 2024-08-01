import { FunctionComponent } from 'react';

import { SvgIconProps } from '@design';
import { SvgTemplete } from '@icons';

export const CloseCircleLineSvg: FunctionComponent<SvgIconProps> = (props) => {
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
          d='M10.0001 18.3334C5.39771 18.3334 1.66675 14.6024 1.66675 10C1.66675 5.39765 5.39771 1.66669 10.0001 1.66669C14.6024 1.66669 18.3334 5.39765 18.3334 10C18.3334 14.6024 14.6024 18.3334 10.0001 18.3334ZM10.0001 16.6667C13.682 16.6667 16.6667 13.6819 16.6667 10C16.6667 6.31812 13.682 3.33335 10.0001 3.33335C6.31818 3.33335 3.33341 6.31812 3.33341 10C3.33341 13.6819 6.31818 16.6667 10.0001 16.6667ZM10.0001 8.82152L12.3571 6.46449L13.5356 7.643L11.1786 10L13.5356 12.357L12.3571 13.5355L10.0001 11.1785L7.64306 13.5355L6.46455 12.357L8.82158 10L6.46455 7.643L7.64306 6.46449L10.0001 8.82152Z'
          fill={props.fill ?? '#80848B'}
        />
      </svg>
    </SvgTemplete>
  );
};
