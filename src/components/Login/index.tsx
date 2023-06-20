import React from 'react';
import { FormattedMessage } from 'react-intl';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import LoginForm from 'src/containers/Login/LoginForm';

import messages from './messages';
import styles from './styles';

export default function Login() {
  return (
    <Box sx={styles.boxAvatar}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={styles.typography}>
        <FormattedMessage {...messages.title} />
      </Typography>
      <LoginForm />
    </Box>
  );
}
