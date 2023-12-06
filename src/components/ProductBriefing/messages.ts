import { defineMessages } from 'react-intl';

export const scope = 'Components.ProductBriefing';

export default defineMessages({
  btnAddCart: {
    id: `${scope}.btnAddCart`,
    defaultMessage: 'Add To Cart',
  },
  addToCartMessage: {
    id: `${scope}.addToCartMessage`,
    defaultMessage: 'Add to cart successfully',
  },
  addToCartErrorMessage: {
    id: `${scope}.addToCartErrorMessage`,
    defaultMessage: 'Add to cart failed',
  },
});
