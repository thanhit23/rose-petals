import { defineMessages } from 'react-intl';

export const scope = 'Components.Login';

export default defineMessages({
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign in',
  },
  btnSignUp: {
    id: `${scope}.btnSignUp`,
    defaultMessage: 'Sign Up',
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
  hasAccount: {
    id: `${scope}.hasAccount`,
    defaultMessage: 'Already have an account?',
  },
});
