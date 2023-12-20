import { defineMessages } from 'react-intl';

export const scope = 'Containers.ListPaymentMethod';

export default defineMessages({
  paymentMethods: {
    id: `${scope}.paymentMethods`,
    defaultMessage: 'Payment Methods',
  },
  cashOnDelivery: {
    id: `${scope}.cashOnDelivery`,
    defaultMessage: 'Cash On Delivery',
  },
});
