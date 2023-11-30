import { defineMessages } from 'react-intl';

export const scope = 'Components.ShowModalDeleteMyAddress';

export default defineMessages({
  titleModalConfirm: {
    id: `${scope}.titleModalConfirm`,
    defaultMessage: 'Are you sure?',
  },
  btnConfirm: {
    id: `${scope}.btnConfirm`,
    defaultMessage: 'Submit',
  },
  btnCancel: {
    id: `${scope}.btnCancel`,
    defaultMessage: 'Cancel',
  },
});
