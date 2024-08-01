import { Box } from '@design';

import { WidgetRendererProps } from './types';
export const WidgetRenderer = ({
  children,
  startWidget,
  endWidget,
}: WidgetRendererProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
      }}
    >
      {startWidget && <>{startWidget}</>}
      {children}
      {endWidget && <>{endWidget}</>}
    </Box>
  );
};
