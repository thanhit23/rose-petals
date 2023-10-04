import { defineMessages } from 'react-intl';

export const scope = 'Components.BestSellingCategories';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Best selling Categories',
  },
  menFashion: {
    id: `${scope}.menFashion`,
    defaultMessage: "Men's Fashion",
  },
  womenFashion: {
    id: `${scope}.womenFashion`,
    defaultMessage: "Women's Fashion",
  },
  gadgets: {
    id: `${scope}.gadgets`,
    defaultMessage: 'Gadgets',
  },
  cosmetics: {
    id: `${scope}.cosmetics`,
    defaultMessage: 'Cosmetics',
  },
});
