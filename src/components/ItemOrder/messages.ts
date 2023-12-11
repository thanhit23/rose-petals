import { defineMessages } from 'react-intl';

export const scope = 'Components.ItemOrder';

export default defineMessages({
  deleteOrderSuccess: {
    id: `${scope}.deleteOrderSuccess`,
    defaultMessage: 'Delete order successfully',
  },
  deleteOrderFailed: {
    id: `${scope}.deleteOrderFailed`,
    defaultMessage: 'Delete order failed',
  },
  deleteThisOrder: {
    id: `${scope}.deleteThisOrder`,
    defaultMessage: 'Delete this order',
  },
});
