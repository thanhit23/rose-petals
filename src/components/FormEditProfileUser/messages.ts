import { defineMessages } from 'react-intl';

export const scope = 'Component.FormEditProfileUser';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Edit Profile',
  },
  backToProfile: {
    id: `${scope}.backToProfile`,
    defaultMessage: 'Back To Profile',
  },
  labelName: {
    id: `${scope}.labelName`,
    defaultMessage: 'Name',
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email',
  },
  labelAddress: {
    id: `${scope}.labelAddress`,
    defaultMessage: 'Address',
  },
  labelPhone: {
    id: `${scope}.labelPhone`,
    defaultMessage: 'Phone',
  },
  btnSave: {
    id: `${scope}.btnSave`,
    defaultMessage: 'Save Changes',
  },
  updateProfileSuccess: {
    id: `${scope}.updateProfileSuccess`,
    defaultMessage: 'Update profile success',
  },
  updateProfileFailed: {
    id: `${scope}.updateProfileFailed`,
    defaultMessage: 'Update profile failed',
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
  emailRequired: {
    id: `${scope}.emailRequired`,
    defaultMessage: 'Email is required',
  },
  emailMustBeValid: {
    id: `${scope}.emailMustBeValid`,
    defaultMessage: 'Email must be a valid email',
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
  locationRequired: {
    id: `${scope}.locationRequired`,
    defaultMessage: 'Location is required',
  },
  genderRequired: {
    id: `${scope}.genderRequired`,
    defaultMessage: 'Gender is required',
  },
});
