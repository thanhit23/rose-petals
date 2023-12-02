import * as Yup from 'yup';

export const editProfileValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().required('Email is required').email(),
  phoneNumber: Yup.string().required('Phone number is required'),
  location: Yup.string().required('Location is required'),
  gender: Yup.number().required('Gender is required'),
});
