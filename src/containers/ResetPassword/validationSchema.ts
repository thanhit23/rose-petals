import * as Yup from 'yup';

export const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('New Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(16, 'Please enter up to 16 characters')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)/, 'Password must contain at least one letter and one number'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Confirm Password must match password'),
});
