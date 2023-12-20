import { defineMessages } from 'react-intl';

export const scope = 'Containers.ProductReview';

export default defineMessages({
  createMessage: {
    id: `${scope}.createMessage`,
    defaultMessage: 'Create successfully',
  },
  updateMessage: {
    id: `${scope}.updateMessage`,
    defaultMessage: 'Update successfully',
  },
  deleteMessage: {
    id: `${scope}.deleteMessage`,
    defaultMessage: 'Delete successfully',
  },
});
