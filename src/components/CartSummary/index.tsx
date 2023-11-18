import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

import { Props } from 'src/containers/Cart/types';
import formatPrice from 'src/helpers/formatPrice';

import messages from './messages';
import styles from './styles';

const CartSummary: React.FC<Props> = ({ productList }) => {
  const totalProducts = productList.reduce(
    (total: number, productCart: { product: { price: number }; quantity: number }) =>
      total + productCart.product.price * productCart.quantity,
    0,
  );

  return (
    <Paper sx={styles.paperBilling}>
      <Box sx={styles.boxWrapTotalPrice}>
        <Box component="span" sx={styles.boxTotal}>
          <FormattedMessage {...messages.total} />
        </Box>
        <Box component="span" sx={styles.boxPrice}>
          {formatPrice.format(totalProducts)}
        </Box>
      </Box>
      <Divider sx={styles.divider} />
      <Link to="/checkout">
        <Button fullWidth variant="contained" size="medium" sx={styles.btnCheckoutNow}>
          <FormattedMessage {...messages.btnCheckoutNow} />
        </Button>
      </Link>
    </Paper>
  );
};

export default CartSummary;
