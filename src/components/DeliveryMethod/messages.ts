import { defineMessages } from 'react-intl';

export const scope = 'Components.DeliveryMethod';

export default defineMessages({
  cardNumber: {
    id: `${scope}.cardNumber`,
    defaultMessage: 'Card Number',
  },
  expDate: {
    id: `${scope}.expDate`,
    defaultMessage: 'Exp Date',
  },
  nameOnCard: {
    id: `${scope}.nameOnCard`,
    defaultMessage: 'Name On Card',
  },
  btnSubmit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Submit',
  },
  paypalEmail: {
    id: `${scope}.paypalEmail`,
    defaultMessage: 'Paypal Email',
  },
  payWithCreditCard: {
    id: `${scope}.payWithCreditCard`,
    defaultMessage: 'Pay with credit card',
  },
  payWithPaypal: {
    id: `${scope}.payWithPaypal`,
    defaultMessage: 'Pay with Paypal',
  },
  cashOnDelivery: {
    id: `${scope}.cashOnDelivery`,
    defaultMessage: 'Cash On Delivery',
  },
  btnBackToCheckout: {
    id: `${scope}.btnBackToCheckout`,
    defaultMessage: 'Back to checkout details',
  },
  btnReview: {
    id: `${scope}.btnReview`,
    defaultMessage: 'Review',
  },
});
