import { defineMessages } from 'react-intl';

export const scope = 'Components.FormPaymentMethod';

export default defineMessages({
  labelCardNumber: {
    id: `${scope}.label.name`,
    defaultMessage: 'Card Number',
  },
  labelNameOnCard: {
    id: `${scope}.label.nameOnCard`,
    defaultMessage: 'Name on Card',
  },
  labelDate: {
    id: `${scope}.label.data`,
    defaultMessage: 'Date',
  },
  labelCvc: {
    id: `${scope}.label.cvc`,
    defaultMessage: 'CVC',
  },
  btnSaveChange: {
    id: `${scope}.button.saveChange`,
    defaultMessage: 'Save Changes',
  },
});
