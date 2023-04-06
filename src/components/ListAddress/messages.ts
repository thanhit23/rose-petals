import { defineMessages } from 'react-intl';

export const scope = 'Components.ListAddress';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'My Addresses',
  },
  btnAddAddress: {
    id: `${scope}.button.addAddress`,
    defaultMessage: 'Add New Address',
  },
});