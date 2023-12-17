import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormattedMessage, useIntl } from 'react-intl';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import PersonIcon from '@mui/icons-material/Person';
import { LoadingButton } from '@mui/lab';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { compose } from 'redux';

import { State } from 'src/common/types';
import { TData } from 'src/containers/Profile/Edit/types';
import { integrationPathImage } from 'src/helpers';
import { PATH_AUTH } from 'src/routes/paths';

import ErrorMessage from '../ErrorMessage';
import HeaderHoldUser from '../HeaderHoldUser';
import ImageCropper from '../ImageCropper';
import MuiTextField from '../TextField';
import messages from './messages';
import styles from './styles';
import { Props, UserSubmitForm } from './types';
import { editProfileValidationSchema } from './validationSchema';

const FormEditProfileUser: React.FC<Props> = ({ auth, onUpdateProfileUser, onUploadAvatar, onUpdateAvatarUser }) => {
  const t = useIntl();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(editProfileValidationSchema(t)),
    defaultValues: {
      name: auth.name,
      email: auth.email,
      phoneNumber: String(auth.phoneNumber),
      location: auth.location,
      gender: auth.gender,
    },
  });

  const { email, name, phoneNumber, location, gender } = errors;

  const onSubmitForm = (data: UserSubmitForm) => {
    onUpdateProfileUser.mutate(
      { ...data, phoneNumber: String(data.phoneNumber) },
      {
        onSuccess: ({ data: { status } }: TData) => {
          if (status) {
            toast.success(<FormattedMessage {...messages.updateProfileSuccess} />);
            navigate(PATH_AUTH.profile);
          } else {
            toast.error(<FormattedMessage {...messages.updateProfileFailed} />);
          }
        },
      },
    );
  };

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
          <Avatar sx={styles.avatar} src={integrationPathImage(auth.avatar)} alt={auth.name} />
          <Box sx={styles.boxUpload}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
              onClick={() => setOpenModal(true)}
            >
              <CameraEnhanceIcon sx={styles.iconCameraEnhance} />
            </IconButton>
            <ImageCropper
              openModal={openModal}
              handleCloseModal={handleClose}
              onUploadAvatar={onUploadAvatar}
              onUpdateAvatarUser={onUpdateAvatarUser}
            />
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
                    checked={+watch('gender') === 1}
                    value={1}
                    control={<Radio {...register('gender')} />}
                    label="Female"
                  />
                  <FormControlLabel
                    checked={+watch('gender') === 2}
                    value={2}
                    control={<Radio {...register('gender')} />}
                    label="Male"
                  />
                </RadioGroup>
                <ErrorMessage name={gender} />
              </Grid>
            </Grid>
          </Box>
          <LoadingButton loading={onUpdateProfileUser.isLoading} variant="contained" type="submit" sx={styles.btnSave}>
            <FormattedMessage {...messages.btnSave} />
          </LoadingButton>
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
