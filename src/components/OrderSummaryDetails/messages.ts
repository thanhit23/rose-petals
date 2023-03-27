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
  paidCard: {
    id: `${scope}.total`,
    defaultMessage: 'Paid by Credit/Debit Card:',
  },
});
