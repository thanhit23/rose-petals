import { connect } from 'react-redux';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { compose } from 'redux';

import CartProductListItem from 'src/components/CartProductListItem';
import CartSummary from 'src/components/CartSummary';
import BreadBarCartPage from 'src/components/FormSteps';

import { Props, State } from './types';

function Cart({ productList }: Props) {
  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <BreadBarCartPage activeIndexPage={1} />
      <Grid container spacing={{ xs: 3 }}>
        <Grid item xs={12} md={8}>
          {productList.map(data => (
            <CartProductListItem key={data._id} productCart={data} />
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  const {
    global: { product },
  } = state;
  return {
    productList: product.cart.list,
  };
};

const withConnect = connect(mapStateToProps, null);

export const Component = compose(withConnect)(Cart);
