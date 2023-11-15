import { FormattedMessage } from 'react-intl';

import { Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';

import HeaderAuth from 'src/components/HeaderAuth';
import { PATH_AUTH } from 'src/routes/paths';

import messages from './messages';
import styles from './styles';

function ResetPassword() {
  return (
    <>
      <HeaderAuth />
      <Box sx={styles.boxResetPassword}>
        <Paper sx={styles.paper}>
          <Typography component="h1" variant="h5">
            <FormattedMessage {...messages.title} />
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              <FormattedMessage {...messages.submit} />
            </Button>
            <Grid>
              <FormattedMessage {...messages.titleAsk} />
              <Link href={PATH_AUTH.register} sx={styles.Item}>
                <FormattedMessage {...messages.titleRegister} />
              </Link>
            </Grid>
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export const Component = ResetPassword;
