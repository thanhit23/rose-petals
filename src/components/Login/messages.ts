import { defineMessages } from 'react-intl';

export const scope = 'Components.Login';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Welcome To Rose Petal',
  },
  rememberMe: {
    id: `${scope}.rememberMe`,
    defaultMessage: 'Remember me',
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
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign Up',
  },
  btnSubmit: {
    id: `${scope}.button.submit`,
    defaultMessage: 'Login',
  },
});
