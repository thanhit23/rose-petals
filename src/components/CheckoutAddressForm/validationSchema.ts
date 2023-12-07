import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Name is required')
    .max(25, 'Full name must be at most 25 characters')
    .matches(/^[a-zA-Z\sÀ-ỹ]+$/, 'Full name must not contain special characters'),
  phoneNumber: Yup.number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .required('Phone number is required')
    .typeError('Phone number must be a number')
    .positive('Phone number must be a positive number')
    .integer('Phone number must be an integer')
    .max(9999999999, 'Phone number must be at most 10 digits'),
  city: Yup.object()
    .test('is-object-and-not-empty', 'City is required', value => Object.keys(value).length > 0)
    .required('City is required'),
});
