import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import PersonIcon from '@mui/icons-material/Person';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { compose } from 'redux';

import ErrorMessage from '../ErrorMessage';
import HeaderHoldUser from '../HeaderHoldUser';
import MuiTextField from '../TextField';
import { Props, State } from '../UserProfile/types';
import messages from './messages';
import styles from './styles';
import { UserSubmitForm } from './types';

function FormEditProfileUser({ auth }: Props) {
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
      fullName: auth.name,
      email: auth.email,
      phoneNumber: auth.phoneNumber,
      address: auth.location,
      gender: auth.gender === 1 ? 1 : 2,
    },
  });
  const { email, fullName, phoneNumber, address } = errors;

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
                  validate={register('fullName')}
                />
                <ErrorMessage name={fullName} />
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
                <MuiTextField
                  label={<FormattedMessage {...messages.labelAddress} />}
                  message={messages.labelAddress}
                  validate={register('address')}
                />
                <ErrorMessage name={address} />
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
                <RadioGroup row {...register('gender')}>
                  <FormControlLabel value={1} control={<Radio />} label="Male" />
                  <FormControlLabel value={2} control={<Radio />} label="Female" />
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

const mapStateToProps = (state: State) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(FormEditProfileUser);
