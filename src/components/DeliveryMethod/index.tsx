import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Gird from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from './styles';
import messages from './messages';

function DeliveryMethod() {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(+event.target.value);
  };

  const renderFormCreditCard = () => {
    if (selectedValue === 1) {
      return (
        <form>
          <Box marginBottom="24px">
            <Gird container spacing={{ xs: 3 }}>
              <Gird item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={styles.textField}
                  label={<FormattedMessage {...messages.cardNumber} />}
                />
              </Gird>
              <Gird item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  placeholder="MM/DD"
                  sx={styles.textField}
                  label={<FormattedMessage {...messages.expDate} />}
                />
              </Gird>
              <Gird item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={styles.textField}
                  label={<FormattedMessage {...messages.nameOnCard} />}
                />
              </Gird>
              <Gird item xs={12} sm={6}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={styles.textField}
                  label={<FormattedMessage {...messages.nameOnCard} />}
                />
              </Gird>
            </Gird>
          </Box>
          <Button variant="outlined" sx={styles.btnSubmit}>
            <FormattedMessage {...messages.btnSubmit} />
          </Button>
          <Divider sx={styles.divider} />
        </form>
      );
    }
  };

  const renderFormPaypal = () => {
    if (selectedValue === 2) {
      return (
        <>
          <form>
            <Box sx={styles.boxPayWithPaypal}>
              <Box sx={styles.boxTextFieldPaypalEmail}>
                <TextField
                  fullWidth
                  size="small"
                  variant="outlined"
                  sx={styles.textField}
                  label={<FormattedMessage {...messages.paypalEmail} />}
                />
              </Box>
              <Button variant="outlined" sx={{ ...styles.btnSubmit, marginBottom: 0 }}>
                <FormattedMessage {...messages.btnSubmit} />
              </Button>
            </Box>
          </form>
          <Divider sx={styles.divider} />
        </>
      );
    }
  };

  return (
    <>
      <Paper sx={styles.paperPayCreditCard}>
        <FormControlLabel
          sx={styles.formControlLabel}
          label={<FormattedMessage {...messages.payWithCreditCard} />}
          control={
            <Radio
              value={1}
              size="small"
              name="radio-buttons"
              onChange={handleChange}
              checked={selectedValue === 1}
              inputProps={{ 'aria-label': 'A' }}
            />
          }
        />
        <Divider sx={styles.divider} />
        {renderFormCreditCard()}
        <FormControlLabel
          sx={styles.formControlLabel}
          label={<FormattedMessage {...messages.payWithPaypal} />}
          control={
            <Radio
              value={2}
              size="small"
              name="radio-buttons"
              onChange={handleChange}
              checked={selectedValue === 2}
              inputProps={{ 'aria-label': 'B' }}
            />
          }
        />
        <Divider sx={styles.divider} />
        {renderFormPaypal()}
        <FormControlLabel
          sx={{ ...styles.formControlLabel, marginBottom: 0 }}
          label={<FormattedMessage {...messages.cashOnDelivery} />}
          control={
            <Radio
              value={3}
              size="small"
              name="radio-buttons"
              onChange={handleChange}
              checked={selectedValue === 3}
              inputProps={{ 'aria-label': 'C' }}
            />
          }
        />
      </Paper>
      <Gird container spacing={{ xs: 7 }}>
        <Gird item xs={12} sm={6}>
          <Link to="/checkout">
            <Button variant="outlined" sx={styles.btnBackCheckout}>
              <FormattedMessage {...messages.btnBackToCheckout} />
            </Button>
          </Link>
        </Gird>
        <Gird item xs={12} sm={6}>
          <Link to="/checkout">
            <Button variant="contained" sx={styles.btnReview}>
              <FormattedMessage {...messages.btnReview} />
            </Button>
          </Link>
        </Gird>
      </Gird>
    </>
  );
}

export default DeliveryMethod;
