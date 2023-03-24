import { defineMessages } from 'react-intl';

export const scope = 'Components.Header.Cart';

export default defineMessages({
  itemTitle: {
    id: `${scope}.item.title`,
    defaultMessage: 'item',
  },
  btnCheckoutNow: {
    id: `${scope}.button.checkoutNow`,
    defaultMessage: 'Checkout Now',
  },
  btnViewCart: {
    id: `${scope}.button.viewCart`,
    defaultMessage: 'View Cart',
  },
});
