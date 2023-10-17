import { defineMessages } from 'react-intl';

export const scope = 'Components.UserProfile';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'My Profile',
  },
  editProfile: {
    id: `${scope}.editProfile`,
    defaultMessage: 'Edit Profile',
  },
  silverUser: {
    id: `${scope}.silverUser`,
    defaultMessage: 'SILVER USER',
  },
  allOrders: {
    id: `${scope}.allOrders`,
    defaultMessage: 'All Orders',
  },
  awaitingPayments: {
    id: `${scope}.awaitingPayments`,
    defaultMessage: 'Awaiting Payments',
  },
  awaitingShipment: {
    id: `${scope}.awaitingShipment`,
    defaultMessage: 'Awaiting Shipment',
  },
  awaitingDelivery: {
    id: `${scope}.awaitingDelivery`,
    defaultMessage: 'Awaiting Delivery',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
  gender: {
    id: `${scope}.gender`,
    defaultMessage: 'Gender',
  },
});
