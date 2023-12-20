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
  nameRequired: {
    id: `${scope}.nameRequired`,
    defaultMessage: 'Name is required',
  },
  nameMaxLength: {
    id: `${scope}.nameMaxLength`,
    defaultMessage: 'Full name must be at most 25 characters',
  },
  nameNotSpecialCharacters: {
    id: `${scope}.nameNotSpecialCharacters`,
    defaultMessage: 'Full name must not contain special characters',
  },
  phoneNumberRequired: {
    id: `${scope}.phoneNumberRequired`,
    defaultMessage: 'Phone number is required',
  },
  phoneNumberPositive: {
    id: `${scope}.phoneNumberPositive`,
    defaultMessage: 'Phone number must be a positive number',
  },
  phoneNumberMustBeANumber: {
    id: `${scope}.phoneNumberMustBeANumber`,
    defaultMessage: 'Phone number must be a number',
  },
  phoneNumberInteger: {
    id: `${scope}.phoneNumberInteger`,
    defaultMessage: 'Phone number must be an integer',
  },
  phoneNumberMaxLength: {
    id: `${scope}.phoneNumberMaxLength`,
    defaultMessage: 'Phone number must be at most 10 digits',
  },
  cityRequired: {
    id: `${scope}.cityRequired`,
    defaultMessage: 'City is required',
  },
});
