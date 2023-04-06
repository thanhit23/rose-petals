import { defineMessages } from 'react-intl';

export const scope = 'Components.ListPaymentMethod';

export default defineMessages({
  paymentMethods: {
    id: `${scope}.paymentMethods`,
    defaultMessage: 'Payment Methods',
  },
  btnAddNew: {
    id: `${scope}.button.addNewPayment`,
    defaultMessage: 'Add New Payment Method',
  },
});
