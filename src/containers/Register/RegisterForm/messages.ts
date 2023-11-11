import { defineMessages } from 'react-intl';

export const scope = 'Containers.Register.Form';

export default defineMessages({
  btnSend: {
    id: `${scope}.btnSend`,
    defaultMessage: 'Send',
  },
  btnConfirm: {
    id: `${scope}.btnConfirm`,
    defaultMessage: 'Confirm',
  },
  btnSignUp: {
    id: `${scope}.btnSignUp`,
    defaultMessage: 'Submit',
  },
  labelEmail: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email Address',
  },
  labelVerifying: {
    id: `${scope}.label.verifying`,
    defaultMessage: 'Verifying Code',
  },
  labelName: {
    id: `${scope}.label.name`,
    defaultMessage: 'Full Name',
  },
  labelPassword: {
    id: `${scope}.label.password`,
    defaultMessage: 'Password',
  },
  labelConfirmPassword: {
    id: `${scope}.label.confirmPassword`,
    defaultMessage: 'Confirm Password',
  },
});
