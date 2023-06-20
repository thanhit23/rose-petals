import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';

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
        <FormattedMessage {...messages.online} />
      </Box>
      <Box component="h1" sx={styles.boxTitle}>
        <FormattedMessage {...messages.summerSeasonSale} />
      </Box>
      <Box component="p" sx={styles.boxShipping}>
        <FormattedMessage {...messages.shipping} />
      </Box>
      <ButtonBase sx={styles.btnShop}>
        <FormattedMessage {...messages.btnShop} />
      </ButtonBase>
    </Box>
  );
}

export default EventNotificationBanner;
