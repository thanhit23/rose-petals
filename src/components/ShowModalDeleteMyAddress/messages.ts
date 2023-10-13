import { defineMessages } from 'react-intl';

export const scope = 'Components.ShowModalDeleteMyAddress';

export default defineMessages({
  titleModalDelete: {
    id: `${scope}.titleModalDelete`,
    defaultMessage: 'Are you sure you want to delete this address?',
  },
  btnDelete: {
    id: `${scope}.btnDelete`,
    defaultMessage: 'Delete',
  },
  btnCancel: {
    id: `${scope}.btnCancel`,
    defaultMessage: 'Cancel',
  },
});
