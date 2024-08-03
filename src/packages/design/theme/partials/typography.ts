import type { TypographyOptions } from '@mui/material/styles/createTypography';
import { unitHelpers } from '../../../helpers';

const fontFamily = 'Roboto';

const typographyOption: TypographyOptions = {
  fontFamily,
  h1: {
    fontSize: unitHelpers.rem(48),
    lineHeight: unitHelpers.rem(84),
    fontWeight: 400,
  },
  h2: {
    fontSize: unitHelpers.rem(22),
    lineHeight: unitHelpers.rem(28),
    fontWeight: 400,
  },
  h3: {
    fontSize: unitHelpers.rem(34),
    lineHeight: unitHelpers.rem(41),
    fontWeight: 700,
  },
  h4: {
    fontSize: unitHelpers.rem(24),
    lineHeight: unitHelpers.rem(42),
    fontWeight: 700,
  },
  h5: {
    fontSize: unitHelpers.rem(20),
    lineHeight: unitHelpers.rem(36),
    fontWeight: 700,
  },
  h6: {
    fontSize: unitHelpers.rem(16),
    lineHeight: unitHelpers.rem(28),
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: unitHelpers.rem(17),
    lineHeight: unitHelpers.rem(22),
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: unitHelpers.rem(14),
    lineHeight: unitHelpers.rem(24),
    fontWeight: 400,
  },
  body1: {
    fontSize: unitHelpers.rem(16),
    lineHeight: unitHelpers.rem(22),
    fontWeight: 400,
  },
  body2: {
    fontSize: unitHelpers.rem(14),
    lineHeight: unitHelpers.rem(22),
    fontWeight: 500,
  },
  button: {
    fontSize: unitHelpers.rem(16),
    lineHeight: unitHelpers.rem(22),
    fontWeight: 500,
  },
  caption: {
    fontSize: unitHelpers.rem(12),
    lineHeight: unitHelpers.rem(16),
    fontWeight: 300,
  },
  overline: {
    fontSize: unitHelpers.rem(10),
    lineHeight: unitHelpers.rem(16),
    fontWeight: 400,
  },
};

export const typography = typographyOption;
