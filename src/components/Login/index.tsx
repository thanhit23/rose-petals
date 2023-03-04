import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';

import Copyright from '../../components/Copyright';
import ErrorMessage from '../ErrorMessage';
import { SignInTypes, UserSubmitForm } from './types';

import messages from './messages';
// import { FormattedMessage } from 'react-intl';
// import { useIntl } from 'react-intl';

const theme = createTheme();

export default function SignIn({ onSubmit }: SignInTypes) {
  // const intl = useIntl();
  // intl.formatMessage({ id: 'messageID' })
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
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            <FormattedMessage {...messages.title} />
          </Typography>
          <Box component="form" onSubmit={handleSubmit(data => handleSubmitForm(data))} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={<FormattedMessage {...messages.labelEmail} />}
              autoComplete="email"
              autoFocus
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
              {...register('password')}
            />
            <ErrorMessage name={password} />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={<FormattedMessage {...messages.rememberMe} />}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              <FormattedMessage {...messages.title} />
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <FormattedMessage {...messages.forgotPassword} />
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  <FormattedMessage {...messages.notAccount} />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
