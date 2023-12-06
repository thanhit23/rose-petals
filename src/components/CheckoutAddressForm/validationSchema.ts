import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  city: Yup.object()
    .test('is-object-and-not-empty', 'City is required', value => Object.keys(value).length > 0)
    .required('City is required'),
});
