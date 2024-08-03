

import { FunctionComponent } from 'react';

import { SvgIconProps } from '@design';
import { SvgTemplete } from '@icons';

export const LogoutLineSvg: FunctionComponent<SvgIconProps> = (props) => {
    return (
        <SvgTemplete {...props}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M9 17C6.87827 17 4.84344 16.1571 3.34315 14.6569C1.84285 13.1566 1 11.1217 1 9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1" stroke="#212121" stroke-width="1.5" stroke-linecap="round" />
                <path d="M7 9H17M17 9L14 6M17 9L14 12" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </SvgTemplete>
    );
};
