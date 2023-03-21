import { defineMessages } from 'react-intl';

export const scope = 'Components.FormSteps';

export default defineMessages({
  cart: {
    id: `${scope}.cart`,
    defaultMessage: '1. Cart',
  },
  detail: {
    id: `${scope}.detail`,
    defaultMessage: '2. Details',
  },
  payment: {
    id: `${scope}.payment`,
    defaultMessage: '3. Payment',
  },
  review: {
    id: `${scope}.review`,
    defaultMessage: '4. Review',
  },
});
