import { IntlShape } from 'react-intl';

import * as Yup from 'yup';

import messages from './messages';

export const validationSchema = (t: IntlShape) =>
  Yup.object().shape({
    fullName: Yup.string()
      .required(t.formatMessage({ ...messages.nameRequired }))
      .max(25, t.formatMessage({ ...messages.nameMaxLength }))
      .matches(/^[^!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]*$/, t.formatMessage({ ...messages.nameNotSpecialCharacters })),
    phoneNumber: Yup.number()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .required(t.formatMessage({ ...messages.phoneNumberRequired }))
      .typeError(t.formatMessage({ ...messages.phoneNumberMustBeANumber }))
      .positive(t.formatMessage({ ...messages.phoneNumberPositive }))
      .integer(t.formatMessage({ ...messages.phoneNumberInteger }))
      .max(9999999999, t.formatMessage({ ...messages.phoneNumberMaxLength })),
    city: Yup.object()
      .test(
        'is-object-and-not-empty',
        t.formatMessage({ ...messages.cityRequired }),
        value => Object.keys(value).length > 0,
      )
      .required(t.formatMessage({ ...messages.cityRequired })),
  });
