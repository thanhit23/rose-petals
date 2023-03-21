import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import LayoutMain from '../LayoutMain';
import BreadBarCartPage from '../FormSteps';
import BillingInformation from './BillingInformation';
import AutocompleteCountry from '../AutocompleteCountry';

import styles from './styles';
import messages from './messages';

function Checkout() {
  const [billingAddress, setBillingAddress] = useState(true);

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
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <BreadBarCartPage activeIndexPage={2} />
        <Grid container spacing={{ xs: 3 }}>
          <Grid item xs={12} md={8} lg={8}>
            <form>
              <Paper elevation={1} sx={styles.paperBillingXShipping}>
                <Typography component="p" sx={styles.typographyTitle}>
                  <FormattedMessage {...messages.shippingAddress} />
                </Typography>
                {renderFormInformation()}
              </Paper>
              <Paper elevation={1} sx={styles.paperBillingXShipping}>
                <Typography component="p" sx={styles.typographyTitle}>
                  <FormattedMessage {...messages.billingAddress} />
                </Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      sx={styles.checkoutBilling}
                      onClick={() => setBillingAddress(!billingAddress)}
                    />
                  }
                  sx={styles.formControlLabel}
                  label="Same as shipping address"
                />
                {billingAddress ? renderFormInformation() : ''}
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
                  <Button variant="contained" sx={styles.btnProceedToPayment}>
                    <FormattedMessage {...messages.btnProceedToPayment} />
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <BillingInformation />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Checkout;
