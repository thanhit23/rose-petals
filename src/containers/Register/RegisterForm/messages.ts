import { defineMessages } from 'react-intl';

export const scope = 'Containers.Register.Form';

export default defineMessages({
  btnSend: {
    id: `${scope}.btnSend`,
    defaultMessage: 'Send',
  },
  btnConfirm: {
    id: `${scope}.btnConfirm`,
    defaultMessage: 'Confirm',
  },
  btnSignUp: {
    id: `${scope}.btnSignUp`,
    defaultMessage: 'Submit',
  },
  registerSuccess: {
    id: `${scope}.registerSuccess`,
    defaultMessage: 'Register successfully',
  },
  passwordInvalid: {
    id: `${scope}.passwordInvalid`,
    defaultMessage: 'Password must contain at least 1 letter and 1 number',
  },
  labelEmail: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email Address',
  },
  labelVerifying: {
    id: `${scope}.label.verifying`,
    defaultMessage: 'Verifying Code',
  },
  labelName: {
    id: `${scope}.label.name`,
    defaultMessage: 'Full Name',
  },
  labelPassword: {
    id: `${scope}.label.password`,
    defaultMessage: 'Password',
  },
  labelConfirmPassword: {
    id: `${scope}.label.confirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  verifyEmailSuccessMessage: {
    id: `${scope}.label.verifyEmailSuccessMessage`,
    defaultMessage: 'The code is send',
  },
  verifyCodeSuccessMessage: {
    id: `${scope}.label.verifyCodeSuccessMessage`,
    defaultMessage: 'The code is verify',
  },
  verifyEmailErrorMessage: {
    id: `${scope}.label.verifyEmailErrorMessage`,
    defaultMessage: 'Please verify email',
  },
  verifyCodeErrorMessage: {
    id: `${scope}.label.verifyCodeErrorMessage`,
    defaultMessage: 'Please verify code',
  },
  nameRequired: {
    id: `${scope}.label.nameRequired`,
    defaultMessage: 'Name is required',
  },
  nameMaxLength: {
    id: `${scope}.label.nameMaxLength`,
    defaultMessage: 'Please enter up to 25 characters',
  },
  emailRequired: {
    id: `${scope}.label.emailRequired`,
    defaultMessage: 'Email is required',
  },
  emailMustBeValid: {
    id: `${scope}.label.emailMustBeValid`,
    defaultMessage: 'Email must be a valid email',
  },
  verifyCodeRequired: {
    id: `${scope}.label.verifyCodeRequired`,
    defaultMessage: 'Verifying Code is required',
  },
  verifyCodeMustBeNumber: {
    id: `${scope}.label.verifyCodeMustBeNumber`,
    defaultMessage: 'Verifying Code must be a number',
  },
  verifyCodePositive: {
    id: `${scope}.label.verifyCodePositive`,
    defaultMessage: 'Please enter a positive number',
  },
  verifyCodeInteger: {
    id: `${scope}.label.verifyCodeInteger`,
    defaultMessage: 'Please enter an integer',
  },
  verifyCodeMaxLength: {
    id: `${scope}.label.verifyCodeMaxLength`,
    defaultMessage: 'Verifying Code must have 6 digits',
  },
  passwordRequired: {
    id: `${scope}.label.passwordRequired`,
    defaultMessage: 'Password is required',
  },
  passwordMinLength: {
    id: `${scope}.label.passwordMinLength`,
    defaultMessage: 'Password must be at least 8 characters',
  },
  passwordMaxLength: {
    id: `${scope}.label.passwordMaxLength`,
    defaultMessage: 'Please enter up to 16 characters',
  },
  confirmPasswordRequired: {
    id: `${scope}.label.confirmPasswordRequired`,
    defaultMessage: 'Confirm Password is required',
  },
  confirmPasswordMustMatch: {
    id: `${scope}.label.confirmPasswordMustMatch`,
    defaultMessage: 'Confirm Password must match password',
  },
});
