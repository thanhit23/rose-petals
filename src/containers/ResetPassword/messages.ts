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
    id: `${scope}.labelPassword`,
    defaultMessage: 'New Password',
  },
  labelConfirmPassword: {
    id: `${scope}.labelConfirmPassword`,
    defaultMessage: 'Confirm Password',
  },
  resetSuccess: {
    id: `${scope}.resetSuccess`,
    defaultMessage: 'Reset password successfully',
  },
  resetFailed: {
    id: `${scope}.resetFailed`,
    defaultMessage: 'Reset password failed!',
  },
  newPasswordRequired: {
    id: `${scope}.newPasswordRequired`,
    defaultMessage: 'New Password is required',
  },
  passwordMinLength: {
    id: `${scope}.passwordMinLength`,
    defaultMessage: 'Password must be at least 8 characters',
  },
  passwordMaxLength: {
    id: `${scope}.passwordMaxLength`,
    defaultMessage: 'Please enter up to 16 characters',
  },
  passwordMatches: {
    id: `${scope}.passwordMatches`,
    defaultMessage: 'Password must contain at least one letter and one number',
  },
  confirmPasswordRequired: {
    id: `${scope}.confirmPasswordRequired`,
    defaultMessage: 'Confirm Password is required',
  },
  confirmPasswordMustMatchPw: {
    id: `${scope}.confirmPasswordMustMatchPw`,
    defaultMessage: 'Confirm Password must match password',
  },
});
