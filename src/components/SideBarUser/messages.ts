import { defineMessages } from 'react-intl';

export const scope = 'Components.SideBarUser';

export default defineMessages({
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'DASHBOARD',
  },
  orders: {
    id: `${scope}.order`,
    defaultMessage: 'Orders',
  },
  wishlist: {
    id: `${scope}.wishlist`,
    defaultMessage: 'Wishlist',
  },
  supportTickers: {
    id: `${scope}.supportTickers`,
    defaultMessage: 'Support Tickers',
  },
  ProfileInfo: {
    id: `${scope}.ProfileInfo`,
    defaultMessage: 'Profile Info',
  },
  accountSetting: {
    id: `${scope}.accountSetting`,
    defaultMessage: 'ACCOUNT SETTINGS',
  },
  addresses: {
    id: `${scope}.addresses`,
    defaultMessage: 'Addresses',
  },
  paymentMethods: {
    id: `${scope}.paymentMethods`,
    defaultMessage: 'Payment Methods',
  },
});
