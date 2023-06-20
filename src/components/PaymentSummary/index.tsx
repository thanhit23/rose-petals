import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

import messages from './messages';
import styles from './styles';

function PaymentSummary() {
  return (
    <Paper sx={styles.paperCalculator}>
      <Box sx={styles.orderCalculator}>
        <Box component="p" sx={styles.orderCalculatorTitle}>
          <FormattedMessage {...messages.subtotal} />
        </Box>
        <Box component="p" sx={styles.orderCalculatorPrice}>
          $2,610.00
        </Box>
      </Box>
      <Box sx={styles.orderCalculator}>
        <Box component="p" sx={styles.orderCalculatorTitle}>
          <FormattedMessage {...messages.shipping} />
        </Box>
        <Box component="p" sx={styles.orderCalculatorPrice}>
          _
        </Box>
      </Box>
      <Box sx={styles.orderCalculator}>
        <Box component="p" sx={styles.orderCalculatorTitle}>
          <FormattedMessage {...messages.tax} />
        </Box>
        <Box component="p" sx={styles.orderCalculatorPrice}>
          $2,610.00
        </Box>
      </Box>
      <Box sx={styles.orderCalculator}>
        <Box component="p" sx={styles.orderCalculatorTitle}>
          <FormattedMessage {...messages.discount} />
        </Box>
        <Box component="p" sx={styles.orderCalculatorPrice}>
          _
        </Box>
      </Box>
      <Divider sx={styles.orderDivider} />
      <Box sx={styles.orderTotal}>$2,650.00</Box>
    </Paper>
  );
}

export default PaymentSummary;
