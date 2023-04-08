import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import SideBarUser from '../../components/SideBarUser';
import HeaderHoldUser from '../../components/HeaderHoldUser';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ItemPaymentMethod from '../../components/ItemPaymentMethod';
import Pagination from '../../components/Pagination';

function PaymentMethod() {
  const handleChangePage = (value: number) => {
    console.log(value);
  };

  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <Grid item xs={12} lg={9}>
            <HeaderHoldUser
              path="/payment-method/add"
              icon={<CreditCardIcon fontSize="medium" />}
              title={<FormattedMessage {...messages.paymentMethods} />}
              button={<FormattedMessage {...messages.btnAddNew} />}
            />
            <ItemPaymentMethod />
            <ItemPaymentMethod />
            <Pagination count={5} onChange={handleChangePage} />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default PaymentMethod;
