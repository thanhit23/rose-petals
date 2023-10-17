import { defineMessages } from 'react-intl';

export const scope = 'Components.FormEditProfileUser';
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
  male: {
    id: `${scope}.male`,
    defaultMessage: 'Male',
  },
  female: {
    id: `${scope}.female`,
    defaultMessage: 'Female',
  },
});
