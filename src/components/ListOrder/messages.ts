import { defineMessages } from 'react-intl';

export const scope = 'Components.ListOrder';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'My Orders',
  },
  order: {
    id: `${scope}.order`,
    defaultMessage: 'Order #',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  datePurchased: {
    id: `${scope}.datePurchased`,
    defaultMessage: 'Date purchased',
  },
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
});
