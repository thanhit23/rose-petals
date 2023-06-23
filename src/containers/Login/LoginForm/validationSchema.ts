import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6).max(45),
});
