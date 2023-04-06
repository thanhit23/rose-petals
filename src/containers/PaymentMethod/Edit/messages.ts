import { defineMessages } from 'react-intl';

export const scope = 'Containers.PaymentMethodEdit';

export default defineMessages({
  editPayment: {
    id: `${scope}.title`,
    defaultMessage: 'Edit Payment Method',
  },
  btnBackPayment: {
    id: `${scope}.button.backPayment`,
    defaultMessage: 'Back to Payment Methods',
  },
});
