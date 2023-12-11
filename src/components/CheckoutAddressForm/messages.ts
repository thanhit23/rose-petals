import { defineMessages } from 'react-intl';

export const scope = 'Components.Checkout';

export default defineMessages({
  shippingAddress: {
    id: `${scope}.shippingAddress`,
    defaultMessage: 'Shipping Address',
  },
  fullName: {
    id: `${scope}.fullName`,
    defaultMessage: 'Full Name',
  },
  phoneNumber: {
    id: `${scope}.phoneNumber`,
    defaultMessage: 'Phone Number',
  },
  city: {
    id: `${scope}.city`,
    defaultMessage: 'City',
  },
  district: {
    id: `${scope}.district`,
    defaultMessage: 'District',
  },
  ward: {
    id: `${scope}.ward`,
    defaultMessage: 'Ward',
  },
  addressDetail: {
    id: `${scope}.addressDetail`,
    defaultMessage: 'Additional Note',
  },
  btnBackToCart: {
    id: `${scope}.btnBackToCart`,
    defaultMessage: 'Back to Cart',
  },
  btnProceedToPayment: {
    id: `${scope}.btnProceedToPayment`,
    defaultMessage: 'Proceed to Payment',
  },
  districtErrorMessage: {
    id: `${scope}.districtErrorMessage`,
    defaultMessage: 'District is required',
  },
  wardErrorMessage: {
    id: `${scope}.wardErrorMessage`,
    defaultMessage: 'Ward is required',
  },
});
