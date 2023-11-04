import { defineMessages } from 'react-intl';

export const scope = 'Components.SideBarUser';

export default defineMessages({
  settings: {
    id: `${scope}.settings`,
    defaultMessage: 'SETTINGS',
  },
  orders: {
    id: `${scope}.order`,
    defaultMessage: 'Orders',
  },
  ProfileInfo: {
    id: `${scope}.ProfileInfo`,
    defaultMessage: 'Profile Info',
  },
  paymentMethods: {
    id: `${scope}.paymentMethods`,
    defaultMessage: 'Payment Methods',
  },
});
