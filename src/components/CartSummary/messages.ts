import { defineMessages } from 'react-intl';

export const scope = 'Components.CartSummary';

export default defineMessages({
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
  btnCheckoutNow: {
    id: `${scope}.button.checkoutNow`,
    defaultMessage: 'Checkout Now',
  },
  errorMessage: {
    id: `${scope}.button.errorMessage`,
    defaultMessage: 'Please add product to cart',
  },
});
