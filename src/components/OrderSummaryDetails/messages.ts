import { defineMessages } from 'react-intl';

export const scope = 'Components.OrderSummaryDetails';

export default defineMessages({
  shippingAddress: {
    id: `${scope}.shippingAddress`,
    defaultMessage: 'Shipping Address',
  },
  totalSummary: {
    id: `${scope}.totalSummary`,
    defaultMessage: 'Total Summary',
  },
  subtotal: {
    id: `${scope}.subtotal`,
    defaultMessage: 'Subtotal:',
  },
  shippingFee: {
    id: `${scope}.shippingFee`,
    defaultMessage: 'Shipping fee:',
  },
  discount: {
    id: `${scope}.discount`,
    defaultMessage: 'Discount:',
  },
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total:',
  },
  paymentMethod: {
    id: `${scope}.paymentMethod`,
    defaultMessage: 'Payment method:',
  },
  btnCancelOrder: {
    id: `${scope}.btnCancelOrder`,
    defaultMessage: 'Cancel Order',
  },
  cancelOrderSuccess: {
    id: `${scope}.cancelOrderSuccess`,
    defaultMessage: 'Cancel order successfully',
  },
  cancelOrderFailed: {
    id: `${scope}.cancelOrderFailed`,
    defaultMessage: 'Cancel order failed',
  },
  cancelThisOrder: {
    id: `${scope}.cancelThisOrder`,
    defaultMessage: 'Cancel this order',
  },
  unPaidMessage: {
    id: `${scope}.unPaidMessage`,
    defaultMessage: 'You have not paid for this order, please order again above!',
  },
});
