import { defineMessages } from 'react-intl';

export const scope = 'Containers.Register.Form';

export default defineMessages({
  btnSignUp: {
    id: `${scope}.btnSignUp`,
    defaultMessage: 'Submit',
  },
  labelName: {
    id: `${scope}.label.name`,
    defaultMessage: 'Full Name',
  },
  labelEmail: {
    id: `${scope}.label.email`,
    defaultMessage: 'Email Address',
  },
  labelPassword: {
    id: `${scope}.label.password`,
    defaultMessage: 'Password',
  },
});
