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
  placedOn: {
    id: `${scope}.placedOn`,
    defaultMessage: 'Placed on:',
  },
  deliveredOn: {
    id: `${scope}.deliveredOn`,
    defaultMessage: 'Delivered on:',
  },
  productProperties: {
    id: `${scope}.productProperties`,
    defaultMessage: 'Product properties:',
  },
  btnWriteReview: {
    id: `${scope}.btnWriteReview`,
    defaultMessage: 'Write a Review',
  },
});
