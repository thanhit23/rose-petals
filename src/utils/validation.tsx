import { FormattedMessage } from 'react-intl';
import { VALUE_MIN_LENGTH, VALUE_MAX_LENGTH } from './constants';

interface Messages {
  id: string;
  defaultMessage: string;
}

export const required = (messages: Messages) => {
  console.log(messages, 'messages');
  return {
    required: {
      value: true,
      message: <FormattedMessage {...messages} />,
    },
  };
};

export const minLength = (messages: Messages) => ({
  minLength: {
    value: VALUE_MIN_LENGTH,
    message: <FormattedMessage {...messages} />,
  },
});

export const maxLength = (messages: Messages) => ({
  maxLength: {
    value: VALUE_MAX_LENGTH,
    message: <FormattedMessage {...messages} />,
  },
});

export const email = (messages: Messages) => ({
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: <FormattedMessage {...messages} />,
  },
});
