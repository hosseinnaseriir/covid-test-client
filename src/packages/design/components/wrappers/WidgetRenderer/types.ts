import { ReactNode } from 'react';

export type WidgetRendererProps = {
  startWidget?: ReactNode;
  endWidget?: ReactNode;
  children?: ReactNode;
};
