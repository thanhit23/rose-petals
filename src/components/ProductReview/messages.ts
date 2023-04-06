import { defineMessages } from 'react-intl';

export const scope = 'Components.ProductReview';

export default defineMessages({
  writeAReview: {
    id: `${scope}.writeAReview`,
    defaultMessage: 'Write a review for this product',
  },
  yourRating: {
    id: `${scope}.yourRating`,
    defaultMessage: 'Your Rating',
  },
  yourReview: {
    id: `${scope}.yourReview`,
    defaultMessage: 'Your Review',
  },
  btnSubmit: {
    id: `${scope}.btnSubmit`,
    defaultMessage: 'Submit',
  },
});
