import { defineMessages } from 'react-intl';

export const scope = 'Containers.PaymentMethodAdd';

export default defineMessages({
  addPayment: {
    id: `${scope}.title`,
    defaultMessage: 'Add Payment Method',
  },
  btnBackPayment: {
    id: `${scope}.button.backPayment`,
    defaultMessage: 'Back to Payment Methods',
  },
});
