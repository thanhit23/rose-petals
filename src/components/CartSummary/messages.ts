import { defineMessages } from 'react-intl';

export const scope = 'Components.CartSummary';

export default defineMessages({
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
  btnCheckoutNow: {
    id: `${scope}.checkoutNow`,
    defaultMessage: 'Checkout Now',
  },
});
