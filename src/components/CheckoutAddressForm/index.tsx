import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AutoCompleteAddress from '../AutocompleteAddress';
import AutocompleteCountry from '../AutocompleteCountry';
import messages from './messages';
import styles from './styles';
import { Props } from './types';

function CheckoutAddressForm({ listData, onFilterCheckout, filterCheckout }: Props) {
  const { province, district, ward } = listData;

  const { control, handleSubmit, setValue } = useForm({
    mode: 'onChange',
    defaultValues: {
      city: '',
      district: '',
      ward: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data, '123123123');
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Paper elevation={1} sx={styles.paperBillingXShipping}>
        <Typography component="p" sx={styles.typographyTitle}>
          <FormattedMessage {...messages.shippingAddress} />
        </Typography>
        <Grid container spacing={{ xs: 6 }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={styles.formControl}>
              <InputLabel htmlFor="full-name" sx={styles.inputLabel}>
                <FormattedMessage {...messages.fullName} />
              </InputLabel>
              <OutlinedInput id="full-name" label="FullName" size="small" sx={styles.outlinedInput} />
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <InputLabel htmlFor="phone-number" sx={styles.inputLabel}>
                <FormattedMessage {...messages.phoneNumber} />
              </InputLabel>
              <OutlinedInput id="phone-number" label="Phone Number" size="small" sx={styles.outlinedInput} />
            </FormControl>
            <AutocompleteCountry />
            <AutoCompleteAddress
              name="district"
              value={filterCheckout.district || ''}
              setValue={(value, reason) => {
                const filter =
                  reason === 'clear'
                    ? { district: null, ward: null, province: filterCheckout.province }
                    : { ...filterCheckout, district: value?.id ?? null };
                onFilterCheckout({ ...filter });
              }}
              onClear={() => {
                setValue('ward', '');
              }}
              label={<FormattedMessage {...messages.district} />}
              data={district}
              validate={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={styles.formControl}>
              <InputLabel htmlFor="email-address" sx={styles.inputLabel}>
                <FormattedMessage {...messages.emailAddress} />
              </InputLabel>
              <OutlinedInput id="email-address" label="Email Address" size="small" sx={styles.outlinedInput} />
            </FormControl>
            <FormControl fullWidth sx={styles.formControl}>
              <InputLabel htmlFor="company" sx={styles.inputLabel}>
                <FormattedMessage {...messages.company} />
              </InputLabel>
              <OutlinedInput id="company" label="Company" size="small" sx={styles.outlinedInput} />
            </FormControl>
            <AutoCompleteAddress
              sx={{ mb: 2 }}
              name="city"
              value={filterCheckout.province || ''}
              setValue={(value, reason) => {
                const filter =
                  reason === 'clear'
                    ? { district: null, ward: null, province: value?.id ?? null }
                    : { ...filterCheckout, province: value?.id ?? null };
                onFilterCheckout({ ...filter });
              }}
              label={<FormattedMessage {...messages.city} />}
              onClear={() => {
                setValue('ward', '');
                setValue('district', '');
              }}
              data={province}
              validate={control}
            />
            <AutoCompleteAddress
              name="ward"
              value={filterCheckout.ward || ''}
              setValue={value => onFilterCheckout({ ...filterCheckout, ward: value?.id ?? null })}
              label={<FormattedMessage {...messages.ward} />}
              data={ward}
              validate={control}
            />
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={{ xs: 6 }}>
        <Grid item xs={12} sm={6}>
          <Link to="/cart">
            <Button variant="outlined" sx={styles.btnBackToCart}>
              <FormattedMessage {...messages.btnBackToCart} />
            </Button>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Link to="/payment"> */}
          <Button type="submit" variant="contained" sx={styles.btnProceedToPayment}>
            <FormattedMessage {...messages.btnProceedToPayment} />
          </Button>
          {/* </Link> */}
        </Grid>
      </Grid>
    </Box>
  );
}

export default CheckoutAddressForm;
