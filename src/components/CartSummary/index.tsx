import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import { Props } from 'src/containers/Cart/types';
import formatPrice from 'src/helpers/formatPrice';
import { PATH_AUTH } from 'src/routes/paths';

import messages from './messages';
import styles from './styles';

const CartSummary: React.FC<Props> = ({ productList }) => {
  const navigate = useNavigate();

  const totalProducts = productList.reduce(
    (total: number, productCart: { product: { price: number }; quantity: number }) =>
      total + productCart.product.price * productCart.quantity,
    0,
  );

  const handleRedirectToCheckout = () => {
    if (productList.length !== 0) {
      navigate(PATH_AUTH.checkout);
    } else {
      toast.error(<FormattedMessage {...messages.errorMessage} />);
    }
  };

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
      <Button fullWidth variant="contained" sx={styles.btnCheckoutNow} onClick={handleRedirectToCheckout}>
        <FormattedMessage {...messages.btnCheckoutNow} />
      </Button>
    </Paper>
  );
};

export default CartSummary;
