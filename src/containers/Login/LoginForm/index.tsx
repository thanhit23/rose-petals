import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Dispatch, bindActionCreators, compose } from 'redux';

import ErrorMessage from 'src/components/ErrorMessage';
import TextField from 'src/components/TextField';
import { useClientLogin } from 'src/queries/auth';
import { PATH_AUTH } from 'src/routes/paths';

import { loginSuccess as loginSuccessAction } from '../actions';
import { Props, UserSubmitForm } from '../types';
import messages from './messages';
import styles from './styles';
import { loginValidationSchema } from './validationSchema';

function LoginForm({ onLoginSuccess, onCloseDialog }: Props) {
  const navigator = useNavigate();

  const [isPassword, setIsPassword] = useState<boolean>(true);

  const { mutate, isLoading } = useClientLogin({
    onSuccess: ({ status, data, message }) => {
      if (status) {
        onLoginSuccess(data);
        onCloseDialog instanceof Function ? onCloseDialog() : navigator('/');
      } else {
        setError('root.afterSubmit', { message });
      }
    },
  });

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const { email, password, root } = errors;

  return (
    <Box sx={styles.boxAvatar}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography component="h1" variant="h5" sx={styles.typography}>
        <FormattedMessage {...messages.title} />
      </Typography>

      <Box component="form" onSubmit={handleSubmit(data => mutate(data))} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {!!root?.afterSubmit && root?.afterSubmit.message && (
              <Alert sx={{ width: '100%' }} severity="error">
                {root?.afterSubmit.message}
              </Alert>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              label={<FormattedMessage {...messages.labelEmail} />}
              validate={register('email')}
              sx={{
                mt: 0,
                '& div > fieldset': {
                  borderColor: () => email && '#e94560',
                },
              }}
            />
            <ErrorMessage name={email} />
          </Grid>

          <Grid item xs={12}>
            <Box position="relative">
              <TextField
                label={<FormattedMessage {...messages.labelPassword} />}
                validate={register('password')}
                type={isPassword ? 'password' : 'text'}
                sx={{
                  '& div > fieldset': {
                    borderColor: () => password && '#e94560',
                  },
                }}
              />
              <IconButton
                aria-label="show-password"
                sx={styles.iconBtnShowPassword}
                onClick={() => setIsPassword(!isPassword)}
              >
                {isPassword ? (
                  <VisibilityOffIcon sx={styles.visibilityOffIcon} />
                ) : (
                  <VisibilityIcon sx={styles.visibilityIcon} />
                )}
              </IconButton>
            </Box>
            <ErrorMessage name={password} />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              fullWidth
              color="inherit"
              size="large"
              type="submit"
              variant="contained"
              loading={isLoading}
              sx={styles.btnSubmit}
            >
              <FormattedMessage {...messages.btnSubmit} />
            </LoadingButton>
          </Grid>

          <Grid item xs={12}>
            <Box sx={styles.boxFooterLogin}>
              <Box color="#2b3445">
                <FormattedMessage {...messages.notAccount} />
              </Box>
              <Link to={PATH_AUTH.register} style={styles.linkSingUp}>
                <FormattedMessage {...messages.signUp} />
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={styles.boxForGotPassword}>
              <FormattedMessage {...messages.forgotPassword} />
              <Link to={PATH_AUTH.resetPassword} style={styles.linkRegister}>
                <FormattedMessage {...messages.resetIt} />
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoginSuccess: bindActionCreators(loginSuccessAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(LoginForm);
