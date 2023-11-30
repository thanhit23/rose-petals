import React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { OrderDetailType } from 'src/containers/Order/types';
import { formatPrice } from 'src/helpers';

import messages from './messages';
import styles from './styles';

type Props = {
  orderDetail: OrderDetailType;
};

function OrderSummaryDetails({ orderDetail }: Props) {
  const discountPrice = orderDetail.subtotal * (orderDetail.discountPercent / 100);
  const renderAddress = (address: string, customNote: string) => (customNote ? `${address}, ${customNote}` : address);

  return (
    <React.Fragment>
      <Grid item xs={12} md={6} lg={6} paddingLeft="24px" paddingTop="24px">
        <Paper sx={styles.paperAddress}>
          <Box component="h5" sx={styles.boxAddressTitle}>
            <FormattedMessage {...messages.shippingAddress} />
          </Box>
          <Box component="p" sx={styles.boxAddress}>
            {renderAddress(orderDetail.address, orderDetail.customNote)}
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={6} paddingLeft="24px" paddingTop="24px">
        <Paper sx={styles.paperSummary}>
          <Box component="h5" sx={styles.boxTotalSummary}>
            <FormattedMessage {...messages.totalSummary} />
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.subtotal} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(orderDetail.subtotal || 0)}
            </Box>
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.shippingFee} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(orderDetail.shipingFee || 0)}
            </Box>
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.discount} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(discountPrice || 0)}
            </Box>
          </Box>
          <Divider sx={styles.divider} />
          <Box sx={{ ...styles.boxTitle, marginBottom: '16px' }}>
            <Box component="h6" sx={styles.priceSummary}>
              <FormattedMessage {...messages.total} />
            </Box>
            <Box component="h6" sx={styles.priceSummary}>
              {formatPrice.format(orderDetail.totalPrice || 0)}
            </Box>
          </Box>
          <Typography sx={styles.paidCard}>
            <FormattedMessage {...messages.paidCard} />
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}

export default OrderSummaryDetails;
