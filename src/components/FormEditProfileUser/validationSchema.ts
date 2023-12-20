import { IntlShape } from 'react-intl';

import * as Yup from 'yup';

import messages from './messages';

export const editProfileValidationSchema = (t: IntlShape) =>
  Yup.object().shape({
    name: Yup.string()
      .required(t.formatMessage({ ...messages.nameRequired }))
      .max(25, t.formatMessage({ ...messages.nameMaxLength }))
      .matches(/^[^!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]*$/, t.formatMessage({ ...messages.nameNotSpecialCharacters })),
    email: Yup.string()
      .required(t.formatMessage({ ...messages.emailRequired }))
      .email(t.formatMessage({ ...messages.emailMustBeValid })),
    phoneNumber: Yup.number()
      .transform((value, originalValue) => (originalValue === '' ? undefined : value))
      .required(t.formatMessage({ ...messages.phoneNumberRequired }))
      .typeError(t.formatMessage({ ...messages.phoneNumberMustBeANumber }))
      .positive(t.formatMessage({ ...messages.phoneNumberPositive }))
      .integer(t.formatMessage({ ...messages.phoneNumberInteger }))
      .max(9999999999, t.formatMessage({ ...messages.phoneNumberMaxLength })),
    location: Yup.string().required(t.formatMessage({ ...messages.locationRequired })),
    gender: Yup.number().required(t.formatMessage({ ...messages.genderRequired })),
  });
