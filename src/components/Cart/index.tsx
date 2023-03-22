import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import LayoutMain from '../LayoutMain';
import BreadBarCartPage from '../FormSteps';
import ProductItem from './ProductItem';
import BillingInformation from './BillingInformation';

function CartPage() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <BreadBarCartPage activeIndexPage={1} />
        <Grid container spacing={{ xs: 3 }}>
          <Grid item xs={12} md={8}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </Grid>
          <Grid item xs={12} md={4}>
            <BillingInformation />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default CartPage;
