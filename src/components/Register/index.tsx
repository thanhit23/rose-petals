import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import RegisterForm from 'src/containers/Register/RegisterForm';
import { PATH_AUTH } from 'src/routes/paths';

import messages from './messages';
import styles from './styles';

function Register() {
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
        <Link to={PATH_AUTH.login} style={styles.linkSingUp}>
          <FormattedMessage {...messages.signIn} />
        </Link>
      </Box>
    </Container>
  );
}

export default Register;
