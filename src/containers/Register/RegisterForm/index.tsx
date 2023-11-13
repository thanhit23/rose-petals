import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import { useMutation } from '@tanstack/react-query';
import { validate } from 'email-validator';

import ErrorMessage from 'src/components/ErrorMessage';
import SuccessMessage from 'src/components/SuccessMessage';
import TextField from 'src/components/TextField';
import { PATH_AUTH } from 'src/routes/paths';

import { TData } from '../../Login/types';
import { register as registerService, verifyCode, verifyEmail } from '../services';
import styles from '../styles';
import messages from './messages';
import { UserSubmitForm, VerifyCode } from './types';
import { registerFormValidationSchema } from './validationSchema';

function RegisterForm() {
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [verifyEmailData, setVerifyEmailData] = useState({ token: '', status: false });
  const [verifyCodeStatus, setVerifyCodeStatus] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    watch,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(registerFormValidationSchema),
  });

  const registerUser = useMutation({
    mutationFn: (data: Omit<UserSubmitForm, 'verifyingCode' | 'confirmPassword'>) => registerService(data),
    onSuccess: ({ data: { status, message } }: TData) => {
      clearErrors('root.afterSubmit');
      if (status) {
        navigate(PATH_AUTH.login);
      } else {
        setError('root.afterSubmit', { message });
      }
    },
  });

  const handleSubmitForm = ({ email, name, password }: Omit<UserSubmitForm, 'verifyingCode' | 'confirmPassword'>) => {
    if (!verifyEmailData.status) {
      setError('root.afterSubmit', {
        message: (<FormattedMessage {...messages.verifyEmailErrorMessage} />) as unknown as string,
      });
      return;
    }
    if (!verifyCodeStatus) {
      setError('root.afterSubmit', {
        message: (<FormattedMessage {...messages.verifyCodeErrorMessage} />) as unknown as string,
      });
      return;
    }

    registerUser.mutate({ email, name, password });
  };

  const verifyUserCode = useMutation({
    mutationFn: (data: VerifyCode) => verifyCode(data),
    onSuccess: ({ data: { status, message } }: TData) => {
      clearErrors('root.afterSubmit');
      setVerifyCodeStatus(status);
      if (!status) {
        setError('root.afterSubmit', { message });
      }
    },
  });

  const verifyUserEmail = useMutation({
    mutationFn: (email: string) => verifyEmail(email),
    onSuccess: ({ data: { data, status, message } }) => {
      clearErrors('root.afterSubmit');
      setVerifyEmailData({
        token: data?.verifyEmailToken,
        status,
      });
      if (!status) {
        setError('root.afterSubmit', { message });
      }
    },
  });

  const handleVerifyCode = () => {
    verifyUserCode.mutate({
      token: verifyEmailData.token,
      code: +watch('verifyingCode'),
    });
  };

  const handleVerifyEmail = () => {
    verifyUserEmail.mutate(watch('email'));
  };

  const verifyEmailSuccessMessage = (message: string) => {
    if (email) {
      setVerifyEmailData({ token: '', status: false });
      return <SuccessMessage />;
    } else {
      return <SuccessMessage message={message} />;
    }
  };

  const verifyCodeSuccessMessage = (message: string) => {
    if (verifyingCode) {
      setVerifyCodeStatus(false);
      return <SuccessMessage />;
    } else {
      return <SuccessMessage message={message} />;
    }
  };

  const { name, email, verifyingCode, password, confirmPassword, root } = errors;

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(handleSubmitForm)} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {!!root?.afterSubmit.message && (
          <Grid item xs={12}>
            <Alert severity="error">
              <Box sx={styles.errorMessage}>{root?.afterSubmit.message}</Box>
            </Alert>
          </Grid>
        )}
        <Grid item xs={12}>
          <Box sx={styles.formControl}>
            <TextField
              disabled={verifyEmailData.status}
              label={<FormattedMessage {...messages.labelEmail} />}
              validate={register('email')}
              sx={{
                mt: 0,
                '& div > fieldset': {
                  borderColor: () => email && '#e94560',
                },
              }}
            />
            <LoadingButton
              disabled={!validate(watch('email'))}
              loading={verifyUserEmail.isLoading}
              fullWidth
              color="inherit"
              size="large"
              variant="contained"
              sx={styles.btnSend}
              onClick={handleVerifyEmail}
            >
              <FormattedMessage {...messages.btnSend} />
            </LoadingButton>
          </Box>
          <ErrorMessage name={email} />
          {verifyEmailData.status &&
            verifyEmailSuccessMessage(
              (<FormattedMessage {...messages.verifyEmailSuccessMessage} />) as unknown as string,
            )}
        </Grid>
        <Grid item xs={12}>
          <Box sx={styles.formControl}>
            <TextField
              label={<FormattedMessage {...messages.labelVerifying} />}
              validate={register('verifyingCode')}
              sx={{
                mt: 0,
                '& div > fieldset': {
                  borderColor: () => verifyingCode && '#e94560',
                },
              }}
            />
            <LoadingButton
              disabled={!(Number(watch('verifyingCode')).toString().length === 6)}
              loading={verifyUserCode.isLoading}
              fullWidth
              color="inherit"
              size="large"
              variant="contained"
              sx={styles.btnConfirm}
              onClick={handleVerifyCode}
            >
              <FormattedMessage {...messages.btnConfirm} />
            </LoadingButton>
          </Box>
          <ErrorMessage name={verifyingCode} />
          {verifyCodeStatus &&
            verifyCodeSuccessMessage(
              (<FormattedMessage {...messages.verifyCodeSuccessMessage} />) as unknown as string,
            )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            label={<FormattedMessage {...messages.labelName} />}
            validate={register('name')}
            sx={{
              mt: 0,
              '& div > fieldset': {
                borderColor: () => name && '#e94560',
              },
            }}
          />
          <ErrorMessage name={name} />
        </Grid>
        <Grid item xs={12}>
          <Box position="relative">
            <TextField
              label={<FormattedMessage {...messages.labelPassword} />}
              validate={register('password')}
              type={isPassword ? 'password' : 'text'}
              sx={{
                mt: 0,
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
          <Box position="relative">
            <TextField
              label={<FormattedMessage {...messages.labelConfirmPassword} />}
              validate={register('confirmPassword')}
              type={isConfirmPassword ? 'password' : 'text'}
              sx={{
                mt: 0,
                '& div > fieldset': {
                  borderColor: () => confirmPassword && '#e94560',
                },
              }}
            />
            <IconButton
              aria-label="show-password"
              sx={styles.iconBtnShowPassword}
              onClick={() => setIsConfirmPassword(!isConfirmPassword)}
            >
              {isConfirmPassword ? (
                <VisibilityOffIcon sx={styles.visibilityOffIcon} />
              ) : (
                <VisibilityIcon sx={styles.visibilityIcon} />
              )}
            </IconButton>
          </Box>
          <ErrorMessage name={confirmPassword} />
        </Grid>
      </Grid>
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={registerUser.isLoading}
        sx={styles.btnSubmit}
      >
        <FormattedMessage {...messages.btnSignUp} />
      </LoadingButton>
    </Box>
  );
}

export default RegisterForm;
