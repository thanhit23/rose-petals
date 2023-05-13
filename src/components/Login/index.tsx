import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import styles from './styles';
import messages from './messages';
import { SignInTypes } from './types';

export default function Login({ loginForm }: SignInTypes) {
  return (
    <Box sx={styles.boxAvatar}>
      <Avatar sx={styles.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5" sx={styles.typography}>
        <FormattedMessage {...messages.title} />
      </Typography>
      {loginForm}
    </Box>
  );
}
