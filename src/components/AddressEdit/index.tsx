import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Place } from '@mui/icons-material';

import styles from './styles';
import messages from './messages';
import { SubmitForm } from './types';
import TextField from '../TextField';
import ErrorMessage from '../ErrorMessage';
import HeaderHoldUser from '../HeaderHoldUser';

function AddressEdit() {
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
    defaultValues: {
      name: 'Office',
      addressLine: '497 Erdman Passage, New Zoietown',
      phone: '(213) 840-9416',
    },
  });

  const handleSubmitForm = (data: object) => {
    console.log(data);
  };

  const { name, addressLine, phone } = errors;

  const styleInputError = (name: object | undefined) => ({
    '& > label': {
      ...styles.labelError,
      color: () => (name ? '#f44336' : ''),
    },
    '& > div > fieldset': {
      borderColor: () => (name ? '#f44336' : ''),
    },
  });

  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        path="/address"
        icon={<Place fontSize="medium" />}
        title={<FormattedMessage {...messages.title} />}
        button={<FormattedMessage {...messages.btnBackAddress} />}
      />
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
          <Button variant="contained" sx={styles.btnSaveChanges} type="submit">
            <FormattedMessage {...messages.btnSaveChange} />
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default AddressEdit;
