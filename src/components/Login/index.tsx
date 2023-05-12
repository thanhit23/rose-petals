import React, { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import styles from './styles';
import messages from './messages';
import TextField from '../TextField';
import ErrorMessage from '../ErrorMessage';
import { SignInTypes, UserSubmitForm } from './types';

export default function SignIn({ onSubmit }: SignInTypes) {
  const [isPassword, setIsPassword] = useState(true);

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
        <Grid container spacing={{ xs: 3 }}>
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
        <Button type="submit" fullWidth variant="contained" sx={styles.btnSubmit}>
          <FormattedMessage {...messages.btnSubmit} />
        </Button>
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
    </Box>
  );
}
