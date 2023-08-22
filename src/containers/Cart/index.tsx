import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import CartProductListItem from 'src/components/CartProductListItem';
import CartSummary from 'src/components/CartSummary';
import BreadBarCartPage from 'src/components/FormSteps';

function Cart() {
  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadBarCartPage activeIndexPage={1} />
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} md={8}>
          <CartProductListItem />
          <CartProductListItem />
          <CartProductListItem />
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = Cart;
