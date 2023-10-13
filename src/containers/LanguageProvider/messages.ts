import { defineMessages } from 'react-intl';

export const scope = 'Source.FormValidateLocale';

export default defineMessages({
  stringEmail: {
    id: `${scope}.title`,
    defaultMessage: 'Please enter correct email format',
  },
  stringMin: {
    id: `${scope}.title`,
    defaultMessage: 'Please enter must be at least 6 characters',
  },
  stringMax: {
    id: `${scope}.title`,
    defaultMessage: 'Please enter up to 32 characters',
  },
  mixedRequired: {
    id: `${scope}.title`,
    defaultMessage: 'This field is required',
  },
  numberMin: {
    id: `${scope}.title`,
    defaultMessage: 'Sign in',
  },
});
