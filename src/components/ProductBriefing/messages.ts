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
  size: {
    id: `${scope}.size`,
    defaultMessage: 'Size',
  },
  quantity: {
    id: `${scope}.quantity`,
    defaultMessage: 'Quantity',
  },
  brand: {
    id: `${scope}.brand`,
    defaultMessage: 'Brand',
  },
  rated: {
    id: `${scope}.rated`,
    defaultMessage: 'Rated',
  },
  pleaseChooseSize: {
    id: `${scope}.pleaseChooseSize`,
    defaultMessage: 'Please choose size for product',
  },
  soldOutProductMessage: {
    id: `${scope}.soldOutProductMessage`,
    defaultMessage: 'The product has been sold out',
  },
  ratings: {
    id: `${scope}.ratings`,
    defaultMessage: 'Ratings',
  },
  sold: {
    id: `${scope}.sold`,
    defaultMessage: 'Sold',
  },
});
