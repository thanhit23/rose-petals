import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useMutation } from '@tanstack/react-query';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { bindActionCreators, compose, Dispatch } from 'redux';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControlLabel from '@mui/material/FormControlLabel';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from './styles';
import messages from './messages';
import reducer from '../../App/reducer';
import { Props, TData } from '../types';
import { login as loginService } from '../services';
import TextField from '../../../components/TextField';
import ErrorMessage from '../../../components/ErrorMessage';
import { UserSubmitForm } from '../../../components/Login/types';
import injectReducer, { TypeDefaultInjectors } from '../../../utils/injectReducer';
import { loginSuccess as loginSuccessAction, loginFailed as loginFailedAction } from '../actions';

function LoginForm({ onLoginSuccess }: Props) {
  const [isPassword, setIsPassword] = useState(true);

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: object) => loginService(data),
    onSuccess: ({ data: { status, data, message } }: TData) => {
      if (status) {
        onLoginSuccess(data);
      } else {
        reset();
        setError('root.afterSubmit', {
          message,
        });
      }
    },
  });

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(45),
  });

  const {
    reset,
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
    <Box component="form" onSubmit={handleSubmit(data => mutate(data))} noValidate sx={{ width: '100%' }}>
      <Grid container spacing={{ xs: 3 }}>
        {!!root?.afterSubmit && (
          <Grid item xs={12}>
            <Alert severity="error">{root?.afterSubmit.message}</Alert>
          </Grid>
        )}
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
          <Box sx={styles.boxPassword}>
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
      </Grid>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label={<FormattedMessage {...messages.rememberMe} />}
        sx={styles.formControlLabel}
      />
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
      <Box sx={styles.boxFooterLogin}>
        <Box color="#2b3445">
          <FormattedMessage {...messages.notAccount} />
        </Box>
        <Link to="/register" style={styles.linkSingUp}>
          <FormattedMessage {...messages.signUp} />
        </Link>
      </Box>
      <Box sx={styles.boxForGotPassword}>
        <FormattedMessage {...messages.forgotPassword} />
        <Link to="/reset-password" style={styles.linkRegister}>
          <FormattedMessage {...messages.resetIt} />
        </Link>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoginFailed: bindActionCreators(loginFailedAction, dispatch),
  onLoginSuccess: bindActionCreators(loginSuccessAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer } as TypeDefaultInjectors);

export default compose(withReducer, withConnect)(LoginForm);