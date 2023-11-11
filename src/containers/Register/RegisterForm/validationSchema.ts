import * as Yup from 'yup';

export const registerFormValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  verifyingCode: Yup.number()
    .required()
    .typeError('Verifying Code must be a number')
    .positive('Please enter a positive number')
    .integer('Please enter an integer')
    .test('length', 'Verifying Code must have 6 digits', function (val) {
      return !val || val.toString().length === 6 || this.createError({ message: 'Verifying Code must have 6 digits' });
    }),
  password: Yup.string().required().min(6).max(40),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Confirm Password must match password'),
});
