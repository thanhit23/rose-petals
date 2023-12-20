import { defineMessages } from 'react-intl';

export const scope = 'Layouts.Header.UserButton';

export default defineMessages({
  profile: {
    id: `${scope}.profile`,
    defaultMessage: 'Profile',
  },
  logout: {
    id: `${scope}.logout`,
    defaultMessage: 'Logout',
  },
});
