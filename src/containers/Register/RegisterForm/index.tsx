import * as Yup from 'yup';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from '../styles';
import messages from './messages';
import { UserSubmitForm } from './types';
import { TData } from '../../Login/types';
import TextField from '../../../components/TextField';
import { register as registerService } from '../services';
import ErrorMessage from '../../../components/ErrorMessage';

function RegisterForm() {
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
      clearErrors();
      if (status) {
        navigate('/login');
      } else {
        setError('root.afterSubmit', {
          message,
        });
      }
    },
  });

  const { name, email, password, root } = errors;

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(data => mutate(data))} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        {!!root?.afterSubmit && (
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
          <TextField
            label={<FormattedMessage {...messages.labelPassword} />}
            validate={register('password')}
            sx={{
              mt: 0,
              '& div > fieldset': {
                borderColor: () => password && '#e94560',
              },
            }}
          />
          <ErrorMessage name={password} />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="I want to receive inspiration, marketing promotions and updates via email."
          />
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
