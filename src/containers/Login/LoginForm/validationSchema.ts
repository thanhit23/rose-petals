import { IntlShape } from 'react-intl';

import * as Yup from 'yup';

import messages from './messages';

export const loginValidationSchema = (t: IntlShape) =>
  Yup.object().shape({
    email: Yup.string()
      .required(t.formatMessage({ ...messages.emailRequired }))
      .email(t.formatMessage({ ...messages.emailMustBeValid })),
    password: Yup.string()
      .required(t.formatMessage({ ...messages.passwordRequired }))
      .min(8, t.formatMessage({ ...messages.passwordMinLength }))
      .max(16, t.formatMessage({ ...messages.passwordMaxLength })),
  });
