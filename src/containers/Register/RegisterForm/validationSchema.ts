import * as Yup from 'yup';

export const registerFormValidationSchema = Yup.object().shape({
  name: Yup.string().required().max(25, 'Please enter up to 25 characters'),
  email: Yup.string().required().email(),
  verifyingCode: Yup.number()
    .transform((value, originalValue) => (originalValue === '' ? undefined : value))
    .required()
    .typeError('Verifying Code must be a number')
    .positive('Please enter a positive number')
    .integer('Please enter an integer')
    .test('is-six-digits', 'Verifying Code must have 6 digits', function (val) {
      return (
        (val && val.toString().length === 6) ||
        new Yup.ValidationError('Verifying Code must have 6 digits', val, 'verifyingCode')
      );
    }),
  password: Yup.string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Please enter up to 16 characters'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Confirm Password must match password'),
});
