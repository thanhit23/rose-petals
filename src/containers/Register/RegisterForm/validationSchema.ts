import { IntlShape } from 'react-intl';

import * as Yup from 'yup';

import messages from './messages';

export const registerFormValidationSchema = (t: IntlShape) =>
  Yup.object().shape({
    name: Yup.string()
      .required(t.formatMessage({ ...messages.nameRequired }))
      .max(25, t.formatMessage({ ...messages.nameMaxLength })),
    email: Yup.string()
      .required(t.formatMessage({ ...messages.emailRequired }))
      .email(t.formatMessage({ ...messages.emailMustBeValid })),
    verifyingCode: Yup.number()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .required(t.formatMessage({ ...messages.verifyCodeRequired }))
      .typeError(t.formatMessage({ ...messages.verifyCodeMustBeNumber }))
      .positive(t.formatMessage({ ...messages.verifyCodePositive }))
      .integer(t.formatMessage({ ...messages.verifyCodeInteger }))
      .test('is-six-digits', t.formatMessage({ ...messages.verifyCodeMaxLength }), function (val) {
        return (
          (val && val.toString().length === 6) ||
          new Yup.ValidationError(t.formatMessage({ ...messages.verifyCodeMaxLength }), val, 'verifyingCode')
        );
      }),
    password: Yup.string()
      .required(t.formatMessage({ ...messages.passwordRequired }))
      .min(8, t.formatMessage({ ...messages.passwordMinLength }))
      .max(16, t.formatMessage({ ...messages.passwordMaxLength })),
    confirmPassword: Yup.string()
      .required(t.formatMessage({ ...messages.confirmPasswordRequired }))
      .oneOf([Yup.ref('password')], t.formatMessage({ ...messages.confirmPasswordMustMatch })),
  });
