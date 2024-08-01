import { variantCreator } from './partials';

export const [
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Caption,
  Overline,
] = [
    variantCreator('h1'),
    variantCreator('h2'),
    variantCreator('h3'),
    variantCreator('h4'),
    variantCreator('h5'),
    variantCreator('h6'),
    variantCreator('subtitle1'),
    variantCreator('subtitle2'),
    variantCreator('body1'),
    variantCreator('body2'),
    variantCreator('caption'),
    variantCreator('overline'),
  ];
