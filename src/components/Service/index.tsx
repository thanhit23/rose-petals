import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Item from './Item';
import icons from './icons';
import messages from './messages';
import styles from './styles';

function Service() {
  return (
    <Container maxWidth="lg" sx={styles.serviceContainer}>
      <Box sx={styles.boxItem}>
        <Item
          title={<FormattedMessage {...messages.fastDelivery} />}
          description={<FormattedMessage {...messages.fastDeliveryDescription} />}
          icon={icons.shiping}
          viewBox="0 0 64 64"
        />
        <Item
          title={<FormattedMessage {...messages.money} />}
          description={<FormattedMessage {...messages.moneyDescription} />}
          icon={icons.savings}
          viewBox="0 0 42 43"
        />
        <Item
          title={<FormattedMessage {...messages.timer} />}
          description={<FormattedMessage {...messages.timerDescription} />}
          icon={icons.timer}
          viewBox="0 0 42 41"
        />
        <Item
          title={<FormattedMessage {...messages.payment} />}
          description={<FormattedMessage {...messages.paymentDescription} />}
          icon={icons.payment}
          viewBox="0 0 42 43"
          last
        />
      </Box>
    </Container>
  );
}

export default Service;
