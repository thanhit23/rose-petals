import { defineMessages } from 'react-intl';

export const scope = 'Components.CartSummary';

export default defineMessages({
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
  additionalComments: {
    id: `${scope}.additionalComments`,
    defaultMessage: 'Additional Comments',
  },
  note: {
    id: `${scope}.note`,
    defaultMessage: 'Note',
  },
  btnCheckoutNow: {
    id: `${scope}.button.checkoutNow`,
    defaultMessage: 'Checkout Now',
  },
});
