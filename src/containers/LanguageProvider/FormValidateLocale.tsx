import { setLocale } from 'yup';
import { useIntl } from 'react-intl';

import message from './messages';

export function FormValidateLocale() {
  const intl = useIntl();
  setLocale({
    string: {
      email: intl.formatMessage(message.stringEmail),
      min: intl.formatMessage(message.stringMin),
      max: intl.formatMessage(message.stringMax),
    },
    mixed: {
      required: intl.formatMessage(message.mixedRequired),
    },
    number: {
      min: intl.formatMessage(message.numberMin),
    },
  });
  return null;
}
