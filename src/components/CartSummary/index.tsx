import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const totalPrice = useCalculateTotalPrice(productList);

  const handleRedirectToCheckout = () => {
    if (!isEmpty(productList)) {
      navigate(PATH_AUTH.checkout);
    }
  };

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
      <Button
        fullWidth
        variant="contained"
        sx={styles.btnCheckoutNow}
        disabled={isEmpty(productList)}
        onClick={handleRedirectToCheckout}
      >
        <FormattedMessage {...messages.btnCheckoutNow} />
      </Button>
    </Paper>
  );
};

export default CartSummary;
