import { defineMessages } from 'react-intl';

export const scope = 'Components.Login';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Sign in',
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
  notAccount: {
    id: `${scope}.notAccount`,
    defaultMessage: "Don't have an account? Sign Up",
  },
});
