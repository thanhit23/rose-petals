import { FormattedMessage } from 'react-intl';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HeaderHoldUser from 'src/components/HeaderHoldUser';
import ItemPaymentMethod from 'src/components/ItemPaymentMethod';
import SideBarUser from 'src/components/SideBarUser';

import messages from './messages';

function PaymentMethod() {
  return (
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
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = PaymentMethod;
