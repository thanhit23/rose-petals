import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import * as Yup from 'yup';

import ErrorMessage from 'src/components/ErrorMessage';
import MuiTextField from 'src/components/TextField';
import { PATH_AUTH } from 'src/routes/paths';

import messages from './messages';
import { forgotPassword } from './services';
import styles from './styles';
import { FormForgotPassword } from './types';

function ForgotPassword() {
  const t = useIntl();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required(t.formatMessage({ ...messages.emailRequired }))
      .email(t.formatMessage({ ...messages.emailMustBeValid })),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const { email } = errors;

  const { mutate, isLoading } = useMutation({
    mutationFn: (data: FormForgotPassword) => forgotPassword(data),
    onSuccess: ({ data: { status, message } }) => {
      if (status) {
        toast.success(<FormattedMessage {...messages.sendEmailSuccess} />);
      } else {
        toast.error(message);
      }
    },
  });

  const onSubmitForm = (data: FormForgotPassword) => {
    mutate(data);
  };

  return (
    <Box sx={styles.boxResetPassword}>
      <Paper sx={styles.paper}>
        <Typography sx={styles.typography} component="h1" variant="h5">
          <FormattedMessage {...messages.title} />
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmitForm)} sx={styles.formSubmit}>
          <Grid>
            <MuiTextField
              type="email"
              label={<FormattedMessage {...messages.labelEmail} />}
              message={messages.labelEmail}
              validate={register('email')}
            />
            <ErrorMessage name={email} />
          </Grid>
          <LoadingButton loading={isLoading} type="submit" fullWidth variant="contained" sx={styles.btnSubmit}>
            <FormattedMessage {...messages.btnSubmit} />
          </LoadingButton>
        </Box>
        <Box sx={styles.bottomReset}>
          <FormattedMessage {...messages.titleAsk} />
          <Link to={PATH_AUTH.register}>
            <FormattedMessage {...messages.titleRegister} />
          </Link>
        </Box>
      </Paper>
    </Box>
  );
}

export const Component = ForgotPassword;
