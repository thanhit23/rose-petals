import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import messages from './messages';
import styles from './styles';

function OrderSummaryDetails() {
  return (
    <>
      <Grid xs={12} md={6} lg={6} paddingLeft="24px" paddingTop="24px">
        <Paper sx={styles.paperAddress}>
          <Box component="h5" sx={styles.boxAddressTitle}>
            <FormattedMessage {...messages.shippingAddress} />
          </Box>
          <Box component="p" sx={styles.boxAddress}>
            Kelly Williams 777 Brockton Avenue, Abington MA 2351
          </Box>
        </Paper>
      </Grid>
      <Grid xs={12} md={6} lg={6} paddingLeft="24px" paddingTop="24px">
        <Paper sx={styles.paperSummary}>
          <Box component="h5" sx={styles.boxTotalSummary}>
            <FormattedMessage {...messages.totalSummary} />
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.subtotal} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              $350.00
            </Box>
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.shippingFee} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              $350.00
            </Box>
          </Box>
          <Box sx={styles.boxTitle}>
            <Typography sx={styles.titleSummary}>
              <FormattedMessage {...messages.discount} />
            </Typography>
            <Box component="h6" sx={styles.priceSummary}>
              $350.00
            </Box>
          </Box>
          <Divider sx={styles.divider} />
          <Box sx={{ ...styles.boxTitle, marginBottom: '16px' }}>
            <Box component="h6" sx={styles.priceSummary}>
              <FormattedMessage {...messages.total} />
            </Box>
            <Box component="h6" sx={styles.priceSummary}>
              $350.00
            </Box>
          </Box>
          <Typography sx={styles.paidCard}>
            <FormattedMessage {...messages.paidCard} />
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}

export default OrderSummaryDetails;
