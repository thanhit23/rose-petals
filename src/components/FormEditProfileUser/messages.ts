import { defineMessages } from 'react-intl';

export const scope = 'Component.FormEditProfileUser';
export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Edit Profile',
  },
  backToProfile: {
    id: `${scope}.backToProfile`,
    defaultMessage: 'Back To Profile',
  },
  labelName: {
    id: `${scope}.labelName`,
    defaultMessage: 'Name',
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email',
  },
  labelAddress: {
    id: `${scope}.labelAddress`,
    defaultMessage: 'Address',
  },
  labelPhone: {
    id: `${scope}.labelPhone`,
    defaultMessage: 'Phone',
  },
  btnSave: {
    id: `${scope}.btnSave`,
    defaultMessage: 'Save Changes',
  },
});
