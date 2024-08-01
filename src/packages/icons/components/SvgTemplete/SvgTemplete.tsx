import { type ComponentProps, type FC } from 'react';

import { SvgIcon } from '@design';

export const SvgTemplete: FC<ComponentProps<typeof SvgIcon>> = (props) => {
  return <SvgIcon {...props} />;
};
