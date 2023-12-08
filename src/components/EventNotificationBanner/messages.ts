import { defineMessages } from 'react-intl';

export const scope = 'Components.EventNotificationBanner';

export default defineMessages({
  extra: {
    id: `${scope}.extra`,
    defaultMessage: 'Extra ',
  },
  saleOff: {
    id: `${scope}.sale Off`,
    defaultMessage: '30% Off',
  },
  online: {
    id: `${scope}.online`,
    defaultMessage: 'Online',
  },
  summerSeasonSale: {
    id: `${scope}.summerSeasonSale`,
    defaultMessage: 'Summer Season Sale',
  },
  shipping: {
    id: `${scope}.shipping`,
    defaultMessage: 'Free shipping on orders over 99.000 vnd',
  },
  btnShop: {
    id: `${scope}.btnShop`,
    defaultMessage: 'Shop Now',
  },
});
