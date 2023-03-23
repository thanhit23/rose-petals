import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Gird from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import FormControlLabel from '@mui/material/FormControlLabel';

import styles from './styles';
import FormSteps from '../FormSteps';

function Payment() {
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
                <TextField fullWidth label="Card Number" variant="outlined" size="small" sx={styles.textField} />
              </Gird>
              <Gird item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Exp Date"
                  variant="outlined"
                  size="small"
                  sx={styles.textField}
                  placeholder="MM/DD"
                />
              </Gird>
              <Gird item xs={12} sm={6}>
                <TextField fullWidth label="Name On Card" variant="outlined" size="small" sx={styles.textField} />
              </Gird>
              <Gird item xs={12} sm={6}>
                <TextField fullWidth label="Name On Card" variant="outlined" size="small" sx={styles.textField} />
              </Gird>
            </Gird>
          </Box>
          <Button variant="outlined" sx={styles.btnSubmit}>
            Submit
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
                <TextField fullWidth label="Paypal Email" variant="outlined" size="small" sx={styles.textField} />
              </Box>
              <Button variant="outlined" sx={{ ...styles.btnSubmit, marginBottom: 0 }}>
                Submit
              </Button>
            </Box>
          </form>
          <Divider sx={styles.divider} />
        </>
      );
    }
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <FormSteps activeIndexPage={3} />
      <Gird container spacing={{ xs: 3 }}>
        <Gird item xs={12} md={8} lg={8}>
          <Paper sx={styles.paperPayCreditCard}>
            <FormControlLabel
              label="Pay with credit card"
              sx={styles.formControlLabel}
              control={
                <Radio
                  checked={selectedValue === 1}
                  onChange={handleChange}
                  value={1}
                  size="small"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                />
              }
            />
            <Divider sx={styles.divider} />
            {renderFormCreditCard()}
            <FormControlLabel
              label="Pay with Paypal"
              sx={styles.formControlLabel}
              control={
                <Radio
                  checked={selectedValue === 2}
                  onChange={handleChange}
                  value={2}
                  size="small"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}
                />
              }
            />
            <Divider sx={styles.divider} />
            {renderFormPaypal()}
            <FormControlLabel
              label="Cash On Delivery"
              sx={{ ...styles.formControlLabel, marginBottom: 0 }}
              control={
                <Radio
                  checked={selectedValue === 3}
                  onChange={handleChange}
                  value={3}
                  size="small"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'C' }}
                />
              }
            />
          </Paper>
          <Gird container spacing={{ xs: 7 }}>
            <Gird item xs={12} sm={6}>
              <Link to="/checkout">
                <Button variant="outlined" sx={styles.btnBackCheckout}>
                  Back to checkout details
                </Button>
              </Link>
            </Gird>
            <Gird item xs={12} sm={6}>
              <Link to="/checkout">
                <Button variant="contained" sx={styles.btnReview}>
                  Review
                </Button>
              </Link>
            </Gird>
          </Gird>
        </Gird>
        <Gird item xs={12} md={4} lg={4}>
          asd
        </Gird>
      </Gird>
    </Container>
  );
}

export default Payment;
