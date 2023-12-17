import { FormattedMessage, useIntl } from 'react-intl';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HeaderHoldUser from 'src/components/HeaderHoldUser';
import ItemPaymentMethod from 'src/components/ItemPaymentMethod';
import SideBarUser from 'src/components/SideBarUser';
import cashOnDelivery from 'src/resources/images/cashOnDelivery.png';
import paypal from 'src/resources/images/paypal.png';
import vnPay from 'src/resources/images/vnpay.png';

import messages from './messages';

function PaymentMethod() {
  const t = useIntl();

  const paymentMethods = [
    {
      id: 1,
      name: 'VN Pay',
      image: vnPay,
    },
    {
      id: 2,
      name: 'PayPal',
      image: paypal,
    },
    {
      id: 3,
      name: t.formatMessage({ ...messages.cashOnDelivery }),
      image: cashOnDelivery,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <HeaderHoldUser
            icon={<CreditCardIcon fontSize="medium" />}
            title={<FormattedMessage {...messages.paymentMethods} />}
          />
          {paymentMethods.map(paymentMethod => (
            <ItemPaymentMethod key={paymentMethod.id} paymentMethod={paymentMethod} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = PaymentMethod;
