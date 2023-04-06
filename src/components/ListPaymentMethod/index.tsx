import Box from '@mui/material/Box';
import styles from './styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Pagination from '@mui/material/Pagination';
import ItemPaymentMethod from '../ItemPaymentMethod';
import HeaderHoldUser from '../HeaderHoldUser';

function ListPaymentMethod() {
  return (
    <>
      <HeaderHoldUser
        path="/payment-method/add"
        icon={<CreditCardIcon fontSize="medium" />}
        title={<FormattedMessage {...messages.paymentMethods} />}
        button={<FormattedMessage {...messages.btnAddNew} />}
      />
      <ItemPaymentMethod />
      <ItemPaymentMethod />
      <Box sx={styles.boxPagination}>
        <Pagination count={5} variant="outlined" color="primary" />
      </Box>
    </>
  );
}

export default ListPaymentMethod;
