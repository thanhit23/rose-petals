import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
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

import { State } from 'src/common/types';
import { AuthType } from 'src/containers/Authenticated/types';
import { PATH_AUTH } from 'src/routes/paths';

import ErrorMessage from '../ErrorMessage';
import HeaderHoldUser from '../HeaderHoldUser';
import MuiTextField from '../TextField';
import messages from './messages';
import styles from './styles';
import { UserSubmitForm } from './types';
import { editProfileValidationSchema } from './validationSchema';

type Props = {
  auth: AuthType;
  onSubmitForm: (data: UserSubmitForm) => void;
};

const FormEditProfileUser: React.FC<Props> = ({ auth, onSubmitForm }) => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(editProfileValidationSchema),
    defaultValues: {
      name: auth.name,
      email: auth.email,
      phoneNumber: auth.phoneNumber,
      location: auth.location,
      gender: auth.gender && auth.gender.toString(),
    },
  });

  const { email, name, phoneNumber, location } = errors;

  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        path={PATH_AUTH.profile}
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
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <Box marginBottom="32px">
            <Grid container spacing={{ xs: 3 }}>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  label={<FormattedMessage {...messages.labelName} />}
                  message={messages.labelName}
                  validate={register('name')}
                />
                <ErrorMessage name={name} />
              </Grid>
              <Grid item xs={12} md={6}>
                <MuiTextField
                  disabled
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
                  validate={register('location')}
                />
                <ErrorMessage name={location} />
              </Grid>
              <Grid item xs={12} md={6}>
                <RadioGroup row>
                  <FormControlLabel
                    checked={watch('gender') === '1'}
                    value={1}
                    control={<Radio {...register('gender')} />}
                    label="Female"
                  />
                  <FormControlLabel
                    checked={watch('gender') === '2'}
                    value={2}
                    control={<Radio {...register('gender')} />}
                    label="Male"
                  />
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
};

const mapStateToProps = ({ global: { auth } }: State) => ({
  auth,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(FormEditProfileUser);
