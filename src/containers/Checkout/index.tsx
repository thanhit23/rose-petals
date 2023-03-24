import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import BreadBarCartPage from '../../components/FormSteps';
import PricingDetail from '../../components/PricingDetail';
import CheckoutAddressForm from '../../components/CheckoutAddressForm';

function Checkout() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <BreadBarCartPage activeIndexPage={2} />
        <Grid container spacing={{ xs: 3 }}>
          <Grid item xs={12} md={8} lg={8}>
            <CheckoutAddressForm />
          </Grid>
          <Grid item xs={12} md={4} lg={4} sx={{ transition: 'all 250ms' }}>
            <PricingDetail />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Checkout;
