import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import CartSummary from '../../components/CartSummary';
import BreadBarCartPage from '../../components/FormSteps';
import CartProductListItem from '../../components/CartProductListItem';

function Cart() {
  return (
    <LayoutMain>
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
    </LayoutMain>
  );
}

export default Cart;
