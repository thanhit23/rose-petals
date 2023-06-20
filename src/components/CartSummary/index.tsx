import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import AutocompleteCountry from '../AutocompleteCountry';
import MuiTextField from '../TextField';
import messages from './messages';
import styles from './styles';

function CartSummary() {
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
      <MuiTextField label={<FormattedMessage {...messages.labelVoucher} />} message={messages.labelVoucher} />
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
      <MuiTextField
        label={<FormattedMessage {...messages.labelZipCode} />}
        message={messages.labelZipCode}
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

export default CartSummary;
