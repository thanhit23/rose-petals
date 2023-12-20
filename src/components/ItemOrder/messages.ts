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
  statusCancelled: {
    id: `${scope}.statusCancelled`,
    defaultMessage: 'CANCELLED',
  },
  statusOrdered: {
    id: `${scope}.statusOrdered`,
    defaultMessage: 'ORDERED',
  },
  statusDelivering: {
    id: `${scope}.statusDelivering`,
    defaultMessage: 'DELIVERING',
  },

  statusDelivered: {
    id: `${scope}.statusDelivered`,
    defaultMessage: 'DELIVERED',
  },
});
