import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';

import { ProductList } from 'src/containers/Cart/types';
import { formatPrice } from 'src/helpers';
import useCalculateTotalPrice from 'src/hooks/useCalculateTotalPrice';

import messages from './messages';
import styles from './styles';

type Props = {
  productList: ProductList;
};

const PaymentSummary: React.FC<Props> = ({ productList }) => {
  const totalPrice = useCalculateTotalPrice(productList);

  return (
    <Paper sx={styles.paperCalculator}>
      <Box sx={styles.orderCalculator}>
        <Box component="p" sx={styles.orderCalculatorTitle}>
          <FormattedMessage {...messages.subtotal} />
        </Box>
        <Box component="p" sx={styles.orderCalculatorPrice}>
          {formatPrice.format(totalPrice)}
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
          _
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
      <Box sx={styles.orderTotal}>{formatPrice.format(totalPrice)}</Box>
    </Paper>
  );
};

export default PaymentSummary;
