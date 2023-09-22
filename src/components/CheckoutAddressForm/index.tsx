import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AutocompleteCountry from '../AutocompleteCountry';
import messages from './messages';
import styles from './styles';

function CheckoutAddressForm() {
  const renderFormInformation = () => (
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
        <FormControl fullWidth sx={styles.formControl}>
          <InputLabel htmlFor="zip-code" sx={styles.inputLabel}>
            <FormattedMessage {...messages.zipCode} />
          </InputLabel>
          <OutlinedInput id="zip-code" label="Zip Code" size="small" sx={styles.outlinedInput} />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel htmlFor="address-1" sx={styles.inputLabel}>
            <FormattedMessage {...messages.address1} />
          </InputLabel>
          <OutlinedInput id="address-1" label="Address 1" size="small" sx={styles.outlinedInput} />
        </FormControl>
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
        <AutocompleteCountry />
        <FormControl fullWidth>
          <InputLabel htmlFor="address-2" sx={styles.inputLabel}>
            <FormattedMessage {...messages.address2} />
          </InputLabel>
          <OutlinedInput id="address-2" label="Address 2" size="small" sx={styles.outlinedInput} />
        </FormControl>
      </Grid>
    </Grid>
  );

  return (
    <form>
      <Paper elevation={1} sx={styles.paperBillingXShipping}>
        <Typography component="p" sx={styles.typographyTitle}>
          <FormattedMessage {...messages.shippingAddress} />
        </Typography>
        {renderFormInformation()}
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
          <Link to="/payment">
            <Button variant="contained" sx={styles.btnProceedToPayment}>
              <FormattedMessage {...messages.btnProceedToPayment} />
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default CheckoutAddressForm;
