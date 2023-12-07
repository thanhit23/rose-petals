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
  placeholderExpDate: {
    id: `${scope}.placeholderExpDate`,
    defaultMessage: 'MM/DD',
  },
  nameOnCard: {
    id: `${scope}.nameOnCard`,
    defaultMessage: 'Name On Card',
  },
  btnContinue: {
    id: `${scope}.button.continue`,
    defaultMessage: 'Continue',
  },
  eWalletVNPay: {
    id: `${scope}.eWalletVNPay`,
    defaultMessage: 'Continue with e-Wallet VNPay',
  },
  paypalEmail: {
    id: `${scope}.paypalEmail`,
    defaultMessage: 'Paypal Email',
  },
  payWithVNPay: {
    id: `${scope}.payWithVNPay`,
    defaultMessage: 'Pay with VNPay',
  },
  payWithPaypal: {
    id: `${scope}.payWithPaypal`,
    defaultMessage: 'Pay with Paypal',
  },
  paymentSuccess: {
    id: `${scope}.paymentSuccess`,
    defaultMessage: 'Payment success',
  },
  paymentFailed: {
    id: `${scope}.paymentFailed`,
    defaultMessage: 'Payment failed',
  },
  orderSuccess: {
    id: `${scope}.orderSuccess`,
    defaultMessage: 'Order success',
  },
  orderFailed: {
    id: `${scope}.orderFailed`,
    defaultMessage: 'Order failed',
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
  paymentOnDelivery: {
    id: `${scope}.paymentOnDelivery`,
    defaultMessage: 'Payment on delivery',
  },
});
