import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useMutation } from '@tanstack/react-query';
import { Dispatch, bindActionCreators, compose } from 'redux';

import ErrorMessage from 'src/components/ErrorMessage';
import TextField from 'src/components/TextField';
import injectReducer, { TypeDefaultInjectors } from 'src/utils/injectReducer';

import reducer from '../../App/reducer';
import { loginSuccess as loginSuccessAction } from '../actions';
import { login as loginService } from '../services';
import { Props, TData, UserSubmitForm } from '../types';
import messages from './messages';
import styles from './styles';
import { loginValidationSchema } from './validationSchema';

function LoginForm({ onLoginSuccess }: Props) {
  const [isPassword, setIsPassword] = useState(true);

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: object) => loginService(data),
    onSuccess: ({ data: { status, data, message } }: TData) => {
      if (status) {
        onLoginSuccess(data);
      } else {
        setError('root.afterSubmit', {
          message,
        });
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
    <Box component="form" onSubmit={handleSubmit(data => mutate(data))} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {!!root?.afterSubmit && (
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<FormattedMessage {...messages.rememberMe} />}
            sx={styles.formControlLabel}
          />
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
            <Link to="/register" style={styles.linkSingUp}>
              <FormattedMessage {...messages.signUp} />
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box sx={styles.boxForGotPassword}>
            <FormattedMessage {...messages.forgotPassword} />
            <Link to="/reset-password" style={styles.linkRegister}>
              <FormattedMessage {...messages.resetIt} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onLoginSuccess: bindActionCreators(loginSuccessAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer } as TypeDefaultInjectors);

export default compose(withReducer, withConnect)(LoginForm);
