import * as React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import styles from './styles';
import messages from './messages';
import RegisterForm from '../../containers/Register/RegisterForm';

export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <Box sx={styles.boxWrap}>
        <Avatar sx={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          <FormattedMessage {...messages.signUp} />
        </Typography>
        <RegisterForm />
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
