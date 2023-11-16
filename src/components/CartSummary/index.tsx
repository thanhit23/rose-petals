import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

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
      <Divider sx={styles.divider} />
      <Box sx={styles.boxTitleComment}>
        <Box component="span" sx={styles.boxAdditionalComments}>
          <FormattedMessage {...messages.additionalComments} />
        </Box>
        <Box component="span" sx={styles.boxNote}>
          <FormattedMessage {...messages.note} />
        </Box>
      </Box>
      <FormControl fullWidth sx={styles.formControlComment}>
        <TextField multiline rows={6} variant="outlined" sx={styles.textFieldComment} />
      </FormControl>
      <Button fullWidth variant="contained" sx={styles.btnCheckoutNow} onClick={handleRedirectToCheckout}>
        <FormattedMessage {...messages.btnCheckoutNow} />
      </Button>
    </Paper>
  );
};

export default CartSummary;
