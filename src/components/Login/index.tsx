import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ErrorMessage from '../ErrorMessage';
import { SignInTypes, UserSubmitForm } from './types';
import messages from './messages';
import styles from './styles';

export default function SignIn({ onSubmit }: SignInTypes) {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6).max(40),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const { email, password } = errors;

  const handleSubmitForm = (data: object) => {
    onSubmit(data);
  };

  return (
    <Box sx={styles.boxAvatar}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={styles.typography}>
        <FormattedMessage {...messages.title} />
      </Typography>
      <Box component="form" onSubmit={handleSubmit(data => handleSubmitForm(data))} noValidate sx={{ width: '100%' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label={<FormattedMessage {...messages.labelEmail} />}
          autoComplete="email"
          autoFocus
          sx={{
            mt: 0,
            '& div > fieldset': {
              borderColor: () => email && '#e94560',
            },
          }}
          {...register('email')}
        />
        <ErrorMessage name={email} />
        <TextField
          margin="normal"
          required
          fullWidth
          label={<FormattedMessage {...messages.labelPassword} />}
          type="password"
          id="password"
          autoComplete="current-password"
          sx={{
            '& div > fieldset': {
              borderColor: () => password && '#e94560',
            },
          }}
          {...register('password')}
        />
        <ErrorMessage name={password} />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label={<FormattedMessage {...messages.rememberMe} />}
          sx={styles.formControlLabel}
        />
        <Button type="submit" fullWidth variant="contained" sx={styles.btnSubmit}>
          <FormattedMessage {...messages.btnSubmit} />
        </Button>
        <Box sx={styles.boxFooterLogin}>
          <Box color="#2b3445">
            <FormattedMessage {...messages.notAccount} />
          </Box>
          <Link to="#" style={styles.linkSingUp}>
            <FormattedMessage {...messages.signUp} />
          </Link>
        </Box>
        <Box sx={styles.boxForGotPassword}>
          <FormattedMessage {...messages.forgotPassword} />
          <Link to="/register" style={styles.linkRegister}>
            <FormattedMessage {...messages.resetIt} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
