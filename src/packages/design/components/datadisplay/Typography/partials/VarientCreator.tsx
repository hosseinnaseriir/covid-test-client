import type { FC } from 'react';
import { Typography, TypographyProps } from '@design/components/datadisplay';

export const variantCreator = (
  variant: TypographyProps['variant']
): FC<Omit<TypographyProps, 'variant'>> => {
  const Variant: FC<Omit<TypographyProps, 'variant'>> = (props) => {
    const { children, ...rest } = props;

    return (
      <Typography variant={variant} {...rest}>
        {children}
      </Typography>
    );
  };

  Variant.displayName = `Typography${variant}`;

  return Variant;
};
