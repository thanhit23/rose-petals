import { FormattedMessage } from 'react-intl';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormPaymentMethod from 'src/components/FormPaymentMethod';
import HeaderHoldUser from 'src/components/HeaderHoldUser';
import SideBarUser from 'src/components/SideBarUser';

import messages from './messages';

function PaymentMethodAdd() {
  return (
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
  );
}

export const Component = PaymentMethodAdd;
