import { defineMessages } from 'react-intl';

export const scope = 'Components.Register';

export default defineMessages({
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Sign up',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign in',
  },
  hasAccount: {
    id: `${scope}.hasAccount`,
    defaultMessage: 'Already have an account?',
  },
});
