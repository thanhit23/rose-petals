import { defineMessages } from 'react-intl';

export const scope = 'Components.Register';

export default defineMessages({
  signUp: {
    id: `${scope}.signUp`,
    defaultMessage: 'Register',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Login',
  },
  hasAccount: {
    id: `${scope}.hasAccount`,
    defaultMessage: 'Already have an account?',
  },
});
