import { defineMessages } from 'react-intl';

export const scope = 'Components.FilterPanel';

export default defineMessages({
  categories: {
    id: `${scope}.categories`,
    defaultMessage: 'Categories',
  },
  priceRange: {
    id: `${scope}.priceRange`,
    defaultMessage: 'Price Range',
  },
  brands: {
    id: `${scope}.brands`,
    defaultMessage: 'Brands',
  },
  ratings: {
    id: `${scope}.ratings`,
    defaultMessage: 'Ratings',
  },
});
