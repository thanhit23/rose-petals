import { defineMessages } from 'react-intl';

export const scope = 'Containers.ResetPassword';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Forgot password',
  },
  titleRegister: {
    id: `${scope}.titleRegister`,
    defaultMessage: 'Register',
  },
  haveAccount: {
    id: `${scope}.haveAccount`,
    defaultMessage: "Don't have an account?",
  },
  btnSubmit: {
    id: `${scope}.btnSubmit`,
    defaultMessage: 'Reset',
  },
  labelPassword: {
    id: `${scope}.password`,
    defaultMessage: 'New Password',
  },
  labelConfirmPassword: {
    id: `${scope}.confirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  resetSuccess: {
    id: `${scope}.resetSuccess`,
    defaultMessage: 'Reset password successfully',
  },
  resetFailed: {
    id: `${scope}.resetSuccess`,
    defaultMessage: 'Reset password failed!',
  },
});
