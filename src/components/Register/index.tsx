import * as Yup from 'yup';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import ErrorMessage from '../ErrorMessage';
import styles from './styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

interface UserSubmitForm {
  firstName: string;
}

export default function Register() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email(),

    password: Yup.string().required().min(6).max(40),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { firstName } = errors;

  const onSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={styles.boxWrap}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(data => onSubmit(data))} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...register('firstName')}
              />
              <ErrorMessage name={firstName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={styles.btnSubmit}>
            <FormattedMessage {...messages.btnSignUp} />
          </Button>
        </Box>
      </Box>
      <Box sx={styles.boxFooterLogin}>
        <Box color="#2b3445">
          <FormattedMessage {...messages.hasAccount} />
        </Box>
        <Link to="/login" style={styles.linkSingUp}>
          <FormattedMessage {...messages.signIn} />
        </Link>
      </Box>
    </Container>
  );
}
