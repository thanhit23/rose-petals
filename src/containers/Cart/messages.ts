import { defineMessages } from 'react-intl';

export const scope = 'Containers.Cart';

export default defineMessages({
  deleteMessage: {
    id: `${scope}.deleteMessage`,
    defaultMessage: 'Delete successfully',
  },
  emptyCartMessage: {
    id: `${scope}.emptyCartMessage`,
    defaultMessage: 'You dont have any products yet',
  },
  btnEmptyCart: {
    id: `${scope}.btnEmptyCart`,
    defaultMessage: 'Shop now',
  },
});
