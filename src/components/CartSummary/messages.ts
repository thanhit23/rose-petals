import { defineMessages } from 'react-intl';

export const scope = 'Components.CartSummary';

export default defineMessages({
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
  additionalComments: {
    id: `${scope}.additionalComments`,
    defaultMessage: 'Additional Comments',
  },
  note: {
    id: `${scope}.note`,
    defaultMessage: 'Note',
  },
  btnApplyVoucher: {
    id: `${scope}.button.applyVoucher`,
    defaultMessage: 'Apply Voucher',
  },
  btnCalculateShipping: {
    id: `${scope}.button.calculateShipping`,
    defaultMessage: 'Calculate Shipping',
  },
  labelState: {
    id: `${scope}.label.State`,
    defaultMessage: 'State',
  },
  labelZipCode: {
    id: `${scope}.label.ZipCode`,
    defaultMessage: 'Zip Code',
  },
  labelVoucher: {
    id: `${scope}.label.voucher`,
    defaultMessage: 'Voucher',
  },
  labelCountry: {
    id: `${scope}.label.country`,
    defaultMessage: 'Country',
  },
  shippingEstimates: {
    id: `${scope}.shippingEstimates`,
    defaultMessage: 'Shipping Estimates',
  },
  btnCheckoutNow: {
    id: `${scope}.button.checkoutNow`,
    defaultMessage: 'Checkout Now',
  },
});
