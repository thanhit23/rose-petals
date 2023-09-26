import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ErrorMessage from '../ErrorMessage';
import HeaderHoldUser from '../HeaderHoldUser';
import MuiTextField from '../TextField';
import messages from './messages';
import styles from './styles';
import { UserSubmitForm } from './types';

function FormEditProfileUser() {
  const [gender, setGender] = React.useState('male');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender((event.target as HTMLInputElement).value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    defaultValues: {
      firstName: 'Nick',
      lastName: 'DuBuque',
      email: 'Jayden.Gislason78@gmail.com',
      phoneNumber: '(445) 653-3771 x985',
    },
  });

  const { email, firstName, lastName, phoneNumber } = errors;

  const handleSubmitForm = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        path="/profile"
        icon={<PersonIcon fontSize="medium" />}
        title={<FormattedMessage {...messages.title} />}
        button={<FormattedMessage {...messages.backToProfile} />}
      />
      <Paper sx={styles.paperAvatar}>
        <Box sx={styles.boxWrapAvatar}>
          <Avatar sx={styles.avatar} src="https://bazar-react.vercel.app/assets/images/faces/ralph.png" />
          <Box sx={styles.boxUpload}>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <CameraEnhanceIcon sx={styles.iconCameraEnhance} />
            </IconButton>
          </Box>
        </Box>
        <form onSubmit={handleSubmit(data => handleSubmitForm(data))}>
          <Box marginBottom="32px">
            <Grid container spacing={{ xs: 3 }}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  label={<FormattedMessage {...messages.labelFirstName} />}
                  message={messages.labelFirstName}
                  validate={register('firstName')}
                />
                <ErrorMessage name={firstName} />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  label={<FormattedMessage {...messages.labelLastName} />}
                  message={messages.labelLastName}
                  validate={register('lastName')}
                />
                <ErrorMessage name={lastName} />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  type="email"
                  label={<FormattedMessage {...messages.labelEmail} />}
                  message={messages.labelEmail}
                  validate={register('email')}
                />
                <ErrorMessage name={email} />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  label={<FormattedMessage {...messages.labelPhone} />}
                  message={messages.labelPhone}
                  validate={register('phoneNumber')}
                />
                <ErrorMessage name={phoneNumber} />
              </Grid>
              <Grid item xs={12} md={6}>
                <RadioGroup row value={gender} onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Box>
          <Button variant="contained" type="submit" sx={styles.btnSave}>
            <FormattedMessage {...messages.btnSave} />
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default FormEditProfileUser;
