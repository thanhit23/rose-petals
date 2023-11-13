import { defineMessages } from 'react-intl';

export const scope = 'Containers.ResetPassword';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Reset your password',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Reset',
  },
  titleRegister: {
    id: `${scope}.titleRegister`,
    defaultMessage: 'Register',
  },
  titleAsk: {
    id: `${scope}.titleAsk`,
    defaultMessage: "Don't have an account?",
  },
});
