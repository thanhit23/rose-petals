import { IntlShape } from 'react-intl';

import * as Yup from 'yup';

import messages from './messages';

export const editProfileValidationSchema = (t: IntlShape) =>
  Yup.object().shape({
    name: Yup.string().required(t.formatMessage({ ...messages.nameRequired })),
    email: Yup.string()
      .required(t.formatMessage({ ...messages.emailRequired }))
      .email(t.formatMessage({ ...messages.emailMustBeValid })),
    phoneNumber: Yup.string().required(t.formatMessage({ ...messages.phoneNumberRequired })),
    location: Yup.string().required(t.formatMessage({ ...messages.locationRequired })),
    gender: Yup.number().required(t.formatMessage({ ...messages.genderRequired })),
  });
