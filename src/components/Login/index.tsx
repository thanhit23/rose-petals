import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';

import ErrorMessage from '../ErrorMessage';
import { SignInTypes, UserSubmitForm } from './types';

import messages from './messages';

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography
        component="h1"
        variant="h5"
        sx={{
          marginBottom: '32px',
          marginTop: '8px',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '1.5',
          textAlign: 'center',
          textTransform: 'none',
          whiteSpace: 'normal',
        }}
      >
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
          sx={{ display: 'flex' }}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            backgroundColor: '#d23f57',
            boxShadow: 'rgb(43 52 69 / 10%) 0px 4px 16px',
            '&:hover': { backgroundColor: '#e3364e', boxShadow: 'rgb(3 0 71 / 1%) 0px 0px 28px' },
          }}
        >
          <FormattedMessage {...messages.btnSubmit} />
        </Button>
        <Box
          sx={{
            display: 'flex',
            webkitBoxPack: 'center',
            justifyContent: 'center',
            webkitBoxAlign: 'center',
            alignItems: 'center',
            marginTop: '1.25rem',
          }}
        >
          <Box sx={{ color: '#2b3445' }}>
            <FormattedMessage {...messages.notAccount} />
          </Box>
          <Link
            href="#"
            variant="body2"
            sx={{
              color: '#2b3445',
              fontWeight: 600,
              lineHeight: 1.5,
              marginLeft: '8px',
              borderBottom: '1px solid rgb(43, 52, 69)',
              textDecoration: 'none',
            }}
          >
            <FormattedMessage {...messages.signUp} />
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            webkitBoxPack: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(243, 245, 249)',
            borderRadius: '4px',
            paddingTop: '20px',
            paddingBottom: '20px',
            marginTop: '1.25rem',
          }}
        >
          <FormattedMessage {...messages.forgotPassword} />
          <Link
            href="/register"
            variant="body2"
            sx={{
              color: '#2b3445',
              fontWeight: 600,
              lineHeight: 1.5,
              marginLeft: '8px',
              borderBottom: '1px solid rgb(43, 52, 69)',
              textDecoration: 'none',
            }}
          >
            <FormattedMessage {...messages.resetIt} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
