import { defineMessages } from 'react-intl';

export const scope = 'Containers.Order';

export default defineMessages({
  orderSuccessMessage: {
    id: `${scope}.orderSuccessMessage`,
    defaultMessage: 'Order successfully',
  },
  orderFailedMessage: {
    id: `${scope}.orderFailedMessage`,
    defaultMessage: 'Order failed!',
  },
});
