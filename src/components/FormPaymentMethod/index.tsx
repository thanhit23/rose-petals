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

function FormPaymentMethod({ defaultValue = {} }: { defaultValue?: object }) {
  const loginValidationSchema = Yup.object().shape({
    cardNumber: Yup.string().required(),
    nameOnCard: Yup.string().required(),
    date: Yup.string().required(),
    cvc: Yup.string().required(),
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

  const { cardNumber, nameOnCard, date, cvc } = errors;

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
                label={<FormattedMessage {...messages.labelCardNumber} />}
                validate={register('cardNumber')}
                sx={styleInputError(cardNumber)}
              />
              <ErrorMessage name={cardNumber} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label={<FormattedMessage {...messages.labelNameOnCard} />}
                validate={register('nameOnCard')}
                sx={styleInputError(nameOnCard)}
              />
              <ErrorMessage name={nameOnCard} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label={<FormattedMessage {...messages.labelDate} />}
                validate={register('date')}
                sx={styleInputError(date)}
              />
              <ErrorMessage name={date} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label={<FormattedMessage {...messages.labelCvc} />}
                validate={register('cvc')}
                sx={styleInputError(cvc)}
              />
              <ErrorMessage name={cvc} />
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

export default FormPaymentMethod;
