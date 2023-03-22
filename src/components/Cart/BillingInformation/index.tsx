import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import styles from './styles';
import messages from './messages';
import AutocompleteCountry from '../../AutocompleteCountry';

function BillingInformation() {
  const currencies = [
    {
      value: 'USD',
      label: 'Chicago',
    },
    {
      value: 'EUR',
      label: 'New york',
    },
  ];

  return (
    <Paper sx={styles.paperBilling}>
      <Box sx={styles.boxWrapTotalPrice}>
        <Box component="span" sx={styles.boxTotal}>
          <FormattedMessage {...messages.total} />
        </Box>
        <Box component="span" sx={styles.boxPrice}>
          $460.00
        </Box>
      </Box>
      <Divider sx={styles.divider} />
      <Box sx={styles.boxTitleComment}>
        <Box component="span" sx={styles.boxAdditionalComments}>
          <FormattedMessage {...messages.additionalComments} />
        </Box>
        <Box component="span" sx={styles.boxNote}>
          <FormattedMessage {...messages.note} />
        </Box>
      </Box>
      <FormControl fullWidth sx={styles.formControlComment}>
        <TextField multiline rows={6} variant="outlined" sx={styles.textFieldComment} />
      </FormControl>
      <Divider sx={styles.divider} />
      <TextField
        fullWidth
        label={<FormattedMessage {...messages.labelVoucher} />}
        variant="outlined"
        size="small"
        placeholder="Voucher"
        sx={styles.textFieldVoucher}
      />
      <Button variant="outlined" sx={styles.btnApplyVoucher}>
        <FormattedMessage {...messages.btnApplyVoucher} />
      </Button>
      <Divider sx={styles.divider} />
      <Box component="span" sx={styles.boxShippingEstimates}>
        <FormattedMessage {...messages.shippingEstimates} />
      </Box>
      <AutocompleteCountry />
      <TextField
        select
        fullWidth
        label={<FormattedMessage {...messages.labelState} />}
        defaultValue="EUR"
        size="small"
        sx={styles.textFieldState}
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label={<FormattedMessage {...messages.labelZipCode} />}
        variant="outlined"
        fullWidth
        size="small"
        sx={styles.textFieldZipCode}
      />
      <Button fullWidth size="medium" variant="outlined" sx={styles.btnCalculateShipping}>
        <FormattedMessage {...messages.btnCalculateShipping} />
      </Button>
      <Link to="/checkout">
        <Button fullWidth variant="contained" size="medium" sx={styles.btnCheckoutNow}>
          <FormattedMessage {...messages.btnCheckoutNow} />
        </Button>
      </Link>
    </Paper>
  );
}

export default BillingInformation;
