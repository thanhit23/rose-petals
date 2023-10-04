import React, { useState } from 'react';
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
import * as Yup from 'yup';

import ErrorMessage from 'src/components/ErrorMessage';
import TextField from 'src/components/TextField';
import { PATH_AUTH } from 'src/routes/paths';

import { TData } from '../../Login/types';
import { register as registerService } from '../services';
import styles from '../styles';
import messages from './messages';
import { UserSubmitForm } from './types';

function RegisterForm() {
  const [isPassword, setIsPassword] = useState(true);

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(40),
  });

  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: object) => registerService(data),
    onSuccess: ({ data: { status, message } }: TData) => {
      clearErrors('root.afterSubmit');
      if (status) {
        navigate(PATH_AUTH.login);
      } else {
        setError('root.afterSubmit', { message });
      }
    },
  });

  const { name, email, password, root } = errors;

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(data => mutate(data))} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {!!root?.afterSubmit.message && (
          <Grid item xs={12}>
            <Alert severity="error">
              <Box sx={styles.errorMessage}>{root?.afterSubmit.message}</Box>
            </Alert>
          </Grid>
        )}
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
      </Grid>
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isLoading}
        sx={styles.btnSubmit}
      >
        <FormattedMessage {...messages.btnSignUp} />
      </LoadingButton>
    </Box>
  );
}

export default RegisterForm;
