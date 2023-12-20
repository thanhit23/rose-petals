import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';

import { PATH_PUBLIC } from 'src/routes/paths';

import messages from './messages';
import styles from './styles';

function EventNotificationBanner() {
  return (
    <Box sx={styles.containerEventNotificationBanner}>
      <Box component="h3" sx={styles.boxTimeSaleOff}>
        <FormattedMessage {...messages.extra} />
        <Box component="span" sx={styles.boxSaleOff}>
          <FormattedMessage {...messages.saleOff} />
        </Box>
        &nbsp;
        <FormattedMessage {...messages.online} />
      </Box>
      <Box component="h1" sx={styles.boxTitle}>
        <FormattedMessage {...messages.summerSeasonSale} />
      </Box>
      <Box component="p" sx={styles.boxShipping}>
        <FormattedMessage {...messages.shipping} />
      </Box>
      <Button
        component={Link}
        to={PATH_PUBLIC.product.category('657faa2305008b0008aae832', 'Phụ Kiện')}
        sx={styles.btnShop}
      >
        <FormattedMessage {...messages.btnShop} />
      </Button>
    </Box>
  );
}

export default EventNotificationBanner;
