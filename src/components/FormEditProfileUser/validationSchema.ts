import * as Yup from 'yup';

export const editProfileValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  phoneNumber: Yup.string().required(),
  location: Yup.string().required(),
});
