import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Grid, Link, Paper, Typography } from '@mui/material';

import ErrorMessage from 'src/components/ErrorMessage';
import HeaderAuth from 'src/components/HeaderAuth';
import MuiTextField from 'src/components/TextField';

import { PATH_AUTH } from '../../routes/paths';
import messages from './messages';
import styles from './styles';
import { validationSchema } from './validationSchema';

function ResetPassword() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
    },
  });

  const { email } = errors;

  const handleSubmitForm = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <HeaderAuth />
      <Box sx={styles.boxResetPassword}>
        <Box sx={styles.boxItem}>
          <Paper sx={styles.paper}>
            <Typography component="h1" variant="h5">
              <FormattedMessage {...messages.title} />
            </Typography>
            <Box component="form" onSubmit={handleSubmit(handleSubmitForm)} noValidate sx={{ mt: 1 }}>
              <MuiTextField
                type="email"
                label={<FormattedMessage {...messages.labelEmail} />}
                message={messages.labelEmail}
                validate={register('email')}
              />
              <ErrorMessage name={email} />
              <Button fullWidth color="inherit" size="large" type="submit" variant="contained" sx={styles.btnSubmit}>
                <FormattedMessage {...messages.submit} />
              </Button>
              <Grid item>
                <FormattedMessage {...messages.haveAccount} />
                <Link href={PATH_AUTH.register}>
                  <FormattedMessage {...messages.register} />
                </Link>
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export const Component = ResetPassword;
