import { defineMessages } from 'react-intl';

export const scope = 'Component.UserProfile';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'My Profile',
  },
  editProfile: {
    id: `${scope}.editProfile`,
    defaultMessage: 'Edit Profile',
  },
  balance: {
    id: `${scope}.balance`,
    defaultMessage: 'Balance:',
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
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: 'First Name',
  },
  lastName: {
    id: `${scope}.lastName`,
    defaultMessage: 'Last Name',
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  phone: {
    id: `${scope}.phone`,
    defaultMessage: 'Phone',
  },
  birthDate: {
    id: `${scope}.birthDate`,
    defaultMessage: 'Birth date',
  },
});