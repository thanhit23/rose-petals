import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import messages from './messages';
import styles from './styles';

function PricingDetail() {
  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.boxCalculate}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.subtotal} />
        </Typography>
        <Typography sx={styles.typographyPrice}>$2,610.00</Typography>
      </Box>
      <Box sx={styles.boxCalculate}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.shipping} />
        </Typography>
        <Typography sx={styles.typographyPrice}>$0.00</Typography>
      </Box>
      <Box sx={styles.boxCalculate}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.tax} />
        </Typography>
        <Typography sx={styles.typographyPrice}>$40.00</Typography>
      </Box>
      <Box sx={{ ...styles.boxCalculate, marginBottom: '16px' }}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.discount} />
        </Typography>
        <Typography sx={styles.typographyPrice}>$0.00</Typography>
      </Box>
      <Divider sx={styles.divider} />
      <Typography sx={styles.typographyTotalPrice}>$2,610.00</Typography>
      <TextField
        id="outlined-basic"
        sx={styles.outlinedInput}
        placeholder="Voucher"
        variant="outlined"
        fullWidth
        size="small"
      />
      <Button variant="outlined" sx={styles.btnApplyVoucher}>
        <FormattedMessage {...messages.btnApplyVoucher} />
      </Button>
    </Paper>
  );
}

export default PricingDetail;
