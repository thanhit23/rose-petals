import { FormattedMessage } from 'react-intl';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormPaymentMethod from 'src/components/FormPaymentMethod';
import HeaderHoldUser from 'src/components/HeaderHoldUser';
import SideBarUser from 'src/components/SideBarUser';

import messages from './messages';

function PaymentMethodEdit() {
  const defaultValue = {
    cardNumber: 'Office',
    nameOnCard: 'Office',
    date: '(213) 840-9416',
    cvc: '(213) 840-9416',
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <HeaderHoldUser
            path="/payment-methods"
            icon={<CreditCardIcon fontSize="medium" />}
            title={<FormattedMessage {...messages.editPayment} />}
            button={<FormattedMessage {...messages.btnBackPayment} />}
          />
          <FormPaymentMethod defaultValue={defaultValue} />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = PaymentMethodEdit;
