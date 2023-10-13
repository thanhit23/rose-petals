import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { yupResolver } from '@hookform/resolvers/yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as Yup from 'yup';

import ErrorMessage from '../ErrorMessage';
import TextField from '../TextField';
import messages from './messages';
import styles from './styles';
import { SubmitForm } from './types';

function FormAddress({ defaultValue = {} }: { defaultValue?: object }) {
  const loginValidationSchema = Yup.object().shape({
    name: Yup.string().required(),
    addressLine: Yup.string().required(),
    phone: Yup.number().required().min(6).max(12),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
    defaultValues: defaultValue || {},
  });

  const { name, addressLine, phone } = errors;

  const handleSubmitForm = (data: object) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const styleInputError = (name: object | undefined) => ({
    '& > div > fieldset': {
      borderColor: () => (name ? '#f44336' : ''),
    },
    '& > label': {
      ...styles.labelError,
      color: () => (name ? '#f44336' : ''),
    },
  });

  return (
    <Paper sx={styles.paperForm}>
      <form onSubmit={handleSubmit(data => handleSubmitForm(data))}>
        <Box marginBottom="32px">
          <Grid container spacing={{ xs: 3 }}>
            <Grid item xs={12} md={6}>
              <TextField
                label={<FormattedMessage {...messages.labelName} />}
                validate={register('name')}
                sx={styleInputError(name)}
              />
              <ErrorMessage name={name} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label={<FormattedMessage {...messages.labelAddressLine} />}
                validate={register('addressLine')}
                sx={styleInputError(addressLine)}
              />
              <ErrorMessage name={addressLine} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label={<FormattedMessage {...messages.labelPhone} />}
                validate={register('phone')}
                sx={styleInputError(phone)}
              />
              <ErrorMessage name={phone} />
            </Grid>
          </Grid>
        </Box>
        <Button variant="contained" sx={styles.btnSaveChange} type="submit">
          <FormattedMessage {...messages.btnSaveChange} />
        </Button>
      </form>
    </Paper>
  );
}

export default FormAddress;
