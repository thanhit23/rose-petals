import { defineMessages } from 'react-intl';

export const scope = 'Containers.Login.Form';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Welcome To Rose Petal',
  },
  labelEmail: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email Address',
  },
  labelPassword: {
    id: `${scope}.label.password`,
    defaultMessage: 'Password',
  },
  forgotPassword: {
    id: `${scope}.forgotPassword`,
    defaultMessage: 'Forgot password?',
  },
  resetIt: {
    id: `${scope}.resetIt`,
    defaultMessage: 'Reset It',
  },
  notAccount: {
    id: `${scope}.notAccount`,
    defaultMessage: "Don't have an account?",
  },
  loginSuccess: {
    id: `${scope}.loginSuccess`,
    defaultMessage: 'Login successfully',
  },
  passwordInvalid: {
    id: `${scope}.passwordInvalid`,
    defaultMessage: 'Password must contain at least 1 letter and 1 number',
  },
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
  btnSubmit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Login',
  },
  emailRequired: {
    id: `${scope}.emailRequired`,
    defaultMessage: 'Email is required',
  },
  emailMustBeValid: {
    id: `${scope}.emailRequired`,
    defaultMessage: 'Email must be a valid email',
  },
  passwordRequired: {
    id: `${scope}.passwordRequired`,
    defaultMessage: 'Password is required',
  },
  passwordMinLength: {
    id: `${scope}.passwordMinLength`,
    defaultMessage: 'Password must be at least 8 characters',
  },
  passwordMaxLength: {
    id: `${scope}.passwordMaxLength`,
    defaultMessage: 'Please enter up to 16 characters',
  },
});
