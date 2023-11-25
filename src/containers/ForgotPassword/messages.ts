import { defineMessages } from 'react-intl';

export const scope = 'Containers.ResetPassword';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Forgot your password',
  },
  titleRegister: {
    id: `${scope}.titleRegister`,
    defaultMessage: 'Register',
  },
  titleAsk: {
    id: `${scope}.titleAsk`,
    defaultMessage: "Don't have an account?",
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email',
  },
  btnSubmit: {
    id: `${scope}.btnSubmit`,
    defaultMessage: 'Send',
  },
  sendEmailSuccess: {
    id: `${scope}.sendEmailSuccess`,
    defaultMessage: 'Please check your email',
  },
});
