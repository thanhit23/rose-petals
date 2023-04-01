import { defineMessages } from 'react-intl';

export const scope = 'Components.AddressAdd';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Add Address',
  },
  btnBackAddress: {
    id: `${scope}.button.backAddress`,
    defaultMessage: 'Back To Address',
  },
  labelName: {
    id: `${scope}.label.name`,
    defaultMessage: 'Name',
  },
  labelAddressLine: {
    id: `${scope}.label.addressLine`,
    defaultMessage: 'Address Line',
  },
  labelPhone: {
    id: `${scope}.label.phone`,
    defaultMessage: 'Phone',
  },
  btnSaveChange: {
    id: `${scope}.button.saveChange`,
    defaultMessage: 'Save Changes',
  },
});
