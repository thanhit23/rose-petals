import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import LayoutMain from '../../../components/LayoutMain';
import SideBarUser from '../../../components/SideBarUser';
import HeaderHoldUser from '../../../components/HeaderHoldUser';
import messages from './messages';
import FormPaymentMethod from '../../../components/FormPaymentMethod';

function PaymentMethodAdd() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <Grid item xs={12} lg={9}>
            <HeaderHoldUser
              path="/payment-methods"
              icon={<CreditCardIcon fontSize="medium" />}
              title={<FormattedMessage {...messages.addPayment} />}
              button={<FormattedMessage {...messages.btnBackPayment} />}
            />
            <FormPaymentMethod />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default PaymentMethodAdd;
