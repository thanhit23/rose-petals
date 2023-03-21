import { defineMessages } from 'react-intl';

export const scope = 'Components.Checkout.BillingInformation';

export default defineMessages({
  subtotal: {
    id: `${scope}.subtotal`,
    defaultMessage: 'Subtotal:',
  },
  shipping: {
    id: `${scope}.shipping`,
    defaultMessage: 'Shipping:',
  },
  tax: {
    id: `${scope}.tax`,
    defaultMessage: 'Tax:',
  },
  discount: {
    id: `${scope}.discount`,
    defaultMessage: 'Discount:',
  },
  btnApplyVoucher: {
    id: `${scope}.button.ApplyVoucher`,
    defaultMessage: 'Apply Voucher',
  },
});
