import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import messages from './messages';
import styles from './styles';

function NotFound() {
  return (
    <Box sx={styles.wrapNotFound}>
      <Box
        component="img"
        src="https://bazar-react.vercel.app/assets/images/illustrations/404.svg"
        sx={styles.imgNotFound}
      />
      <Box>
        <Button variant="outlined" sx={styles.btnGoBack}>
          <FormattedMessage {...messages.btnGoBack} />
        </Button>
        <Button variant="contained" component={Link} to="/" sx={styles.btnGoHome}>
          <FormattedMessage {...messages.btnGoToHome} />
        </Button>
      </Box>
    </Box>
  );
}

export default NotFound;
