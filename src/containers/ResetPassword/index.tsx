import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Paper, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useMutation } from '@tanstack/react-query';

import ErrorMessage from 'src/components/ErrorMessage';
import TextField from 'src/components/TextField';
import { PATH_AUTH } from 'src/routes/paths';

import messages from './messages';
import { resetPassword } from './services';
import styles from './styles';
import { FormResetPassword } from './types';
import { resetPasswordSchema } from './validationSchema';

function ResetPassword() {
  const t = useIntl();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(resetPasswordSchema(t)),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const { password, confirmPassword } = errors;

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: FormResetPassword) => resetPassword(data),
    onSuccess: ({ data: { status, message } }) => {
      if (status) {
        navigate(PATH_AUTH.login);
        toast.success(<FormattedMessage {...messages.resetSuccess} />);
      } else {
        toast.error(message);
      }
    },
  });

  const onSubmitForm = ({ password }: Omit<FormResetPassword, 'token'>) => {
    const token = searchParams.get('token') as string;
    mutate({ token, password });
  };

  return (
    <Box sx={styles.boxResetPassword}>
      <Paper sx={styles.paper}>
        <Typography sx={styles.typography} component="h1" variant="h5">
          <FormattedMessage {...messages.title} />
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmitForm)} sx={styles.formSubmit}>
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
          <LoadingButton loading={isLoading} type="submit" fullWidth variant="contained" sx={styles.btnSubmit}>
            <FormattedMessage {...messages.btnSubmit} />
          </LoadingButton>
        </Box>
        <Box sx={styles.bottomReset}>
          <FormattedMessage {...messages.haveAccount} />
          <Link to={PATH_AUTH.register}>
            <FormattedMessage {...messages.titleRegister} />
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

export const Component = ResetPassword;
