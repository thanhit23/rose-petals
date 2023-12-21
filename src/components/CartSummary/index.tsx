import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { isEmpty } from 'lodash';

import { Props } from 'src/containers/Cart/types';
import formatPrice from 'src/helpers/formatPrice';
import useCalculateTotalPrice from 'src/hooks/useCalculateTotalPrice';
import { PATH_AUTH } from 'src/routes/paths';

import messages from './messages';
import styles from './styles';

const CartSummary: React.FC<Props> = ({ productList }) => {
  const totalPrice = useCalculateTotalPrice(productList);

  return (
    <Paper sx={styles.paperBilling}>
      <Box sx={styles.boxWrapTotalPrice}>
        <Box component="span" sx={styles.boxTotal}>
          <FormattedMessage {...messages.total} />
        </Box>
        <Box component="span" sx={styles.boxPrice}>
          {formatPrice.format(totalPrice)}
        </Box>
      </Box>
      <Link to={PATH_AUTH.checkout}>
        <Button fullWidth variant="contained" sx={styles.btnCheckoutNow} disabled={isEmpty(productList)}>
          <FormattedMessage {...messages.btnCheckoutNow} />
        </Button>
      </Link>
    </Paper>
  );
};

export default CartSummary;
