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
  labelFirstName: {
    id: `${scope}.labelFirstName`,
    defaultMessage: 'First Name',
  },
  labelEmail: {
    id: `${scope}.labelEmail`,
    defaultMessage: 'Email',
  },
  labelAddress: {
    id: `${scope}.labeladdress`,
    defaultMessage: 'address',
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
