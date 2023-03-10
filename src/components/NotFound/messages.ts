import { defineMessages } from 'react-intl';

export const scope = 'Components.NotFound';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Not Found',
  },
  button: {
    id: `${scope}.button.back-to-home`,
    defaultMessage: 'Back to home page',
  },
});
