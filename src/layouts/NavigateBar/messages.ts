import { defineMessages } from 'react-intl';

export const scope = 'Layouts.NavigateBar';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  category: {
    id: `${scope}.category`,
    defaultMessage: 'Category',
  },
  cart: {
    id: `${scope}.cart`,
    defaultMessage: 'Cart',
  },
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profile',
  },
});
