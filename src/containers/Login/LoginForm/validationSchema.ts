import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Please enter up to 16 characters'),
});
