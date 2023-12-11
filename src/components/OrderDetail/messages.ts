import { defineMessages } from 'react-intl';

export const scope = 'Components.OrderDetail';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Order Detail',
  },
  orderAgain: {
    id: `${scope}.orderAgain`,
    defaultMessage: 'Order Again',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  datePurchased: {
    id: `${scope}.datePurchased`,
    defaultMessage: 'Date purchased:',
  },
  total: {
    id: `${scope}.total`,
    defaultMessage: 'Total',
  },
  estimatedDeliveryDate: {
    id: `${scope}.estimatedDeliveryDate`,
    defaultMessage: 'Estimated Delivery Date',
  },
  orderID: {
    id: `${scope}.orderID`,
    defaultMessage: 'Order ID:',
  },
  delivered: {
    id: `${scope}.delivered`,
    defaultMessage: 'DELIVERED',
  },
  cancelled: {
    id: `${scope}.cancelled`,
    defaultMessage: 'CANCELLED',
  },
  placedOn: {
    id: `${scope}.placedOn`,
    defaultMessage: 'Placed on:',
  },
  deliveringStatus: {
    id: `${scope}.deliveringStatus`,
    defaultMessage: 'Delivering status:',
  },
  productProperties: {
    id: `${scope}.productProperties`,
    defaultMessage: 'Product properties:',
  },
  btnWriteReview: {
    id: `${scope}.btnWriteReview`,
    defaultMessage: 'Write a Review',
  },
  boxReviewTitle: {
    id: `${scope}.boxReviewTitle`,
    defaultMessage: 'Review this product',
  },
  btnCancelReview: {
    id: `${scope}.btnCancelReview`,
    defaultMessage: 'Cancel',
  },
  btnReview: {
    id: `${scope}.btnReview`,
    defaultMessage: 'Review',
  },
  createCommentMessage: {
    id: `${scope}.createCommentMessage`,
    defaultMessage: 'Review this product successfully',
  },
  reviewProductFailed: {
    id: `${scope}.reviewProductFailed`,
    defaultMessage: 'Review this product failed',
  },
  orderAgainFailed: {
    id: `${scope}.orderAgainFailed`,
    defaultMessage: 'Order again failed',
  },
  yourRating: {
    id: `${scope}.yourRating`,
    defaultMessage: 'Your Rating',
  },
  yourReview: {
    id: `${scope}.yourReview`,
    defaultMessage: 'Your Review',
  },
  reOrderThisOrder: {
    id: `${scope}.reOrderThisOrder`,
    defaultMessage: 'Reorder this order',
  },
  pleaseWriteSomething: {
    id: `${scope}.pleaseWriteSomething`,
    defaultMessage: 'Please write something...',
  },
});
