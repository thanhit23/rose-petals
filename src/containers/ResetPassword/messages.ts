import { defineMessages } from 'react-intl';

export const scope = 'Containers.ResetPassword';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Forgot password',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Send',
  },
  labelEmail: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email',
  },
  register: {
    id: `${scope}.button.register`,
    defaultMessage: 'Register',
  },
  haveAccount: {
    id: `${scope}.haveAccount`,
    defaultMessage: "Don't have an account?",
  },
});
