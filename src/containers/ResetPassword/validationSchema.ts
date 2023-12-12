import { IntlShape } from 'react-intl';

import * as Yup from 'yup';

import messages from './messages';

export const resetPasswordSchema = (t: IntlShape) =>
  Yup.object().shape({
    password: Yup.string()
      .required(t.formatMessage({ ...messages.newPasswordRequired }))
      .min(8, t.formatMessage({ ...messages.passwordMinLength }))
      .max(16, t.formatMessage({ ...messages.passwordMaxLength }))
      .matches(/^(?=.*[A-Za-z])(?=.*\d)/, t.formatMessage({ ...messages.passwordMatches })),
    confirmPassword: Yup.string()
      .required(t.formatMessage({ ...messages.confirmPasswordRequired }))
      .oneOf([Yup.ref('password')], t.formatMessage({ ...messages.confirmPasswordMustMatchPw })),
  });
