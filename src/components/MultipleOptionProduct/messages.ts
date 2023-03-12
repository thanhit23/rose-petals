import { defineMessages } from 'react-intl';

export const scope = 'Components.MultipleOptionProduct';

export default defineMessages({
  saleProducts: {
    id: `${scope}.saleProducts`,
    defaultMessage: 'Sale Products',
  },
  latestProducts: {
    id: `${scope}.latestProducts`,
    defaultMessage: 'Latest Products',
  },
  bestWeek: {
    id: `${scope}.bestWeek`,
    defaultMessage: 'Best of the Week',
  },
  popularProducts: {
    id: `${scope}.popularProducts`,
    defaultMessage: 'Popular Products',
  },
});
