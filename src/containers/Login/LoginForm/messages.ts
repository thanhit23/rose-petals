import { defineMessages } from 'react-intl';

export const scope = 'Container.Login.Form';

export default defineMessages({
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
