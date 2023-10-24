import React from 'react';
import { connect } from 'react-redux';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { compose } from 'redux';

import { State } from 'src/common/types';
import CartProductListItem from 'src/components/CartProductListItem';
import CartSummary from 'src/components/CartSummary';
import BreadBarCartPage from 'src/components/FormSteps';

import { Props } from './types';

const Cart: React.FC<Props> = ({ productList }) => (
  <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
    <BreadBarCartPage activeIndexPage={1} />
    <Grid container spacing={{ xs: 3 }}>
      <Grid item xs={12} md={8}>
        {productList.map(data => (
          <CartProductListItem key={data._id} productCart={data} />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        <CartSummary productList={productList} />
      </Grid>
    </Grid>
  </Container>
);

const mapStateToProps = ({
  global: {
    product: {
      cart: { list },
    },
  },
}: State) => ({
  productList: list,
});

const withConnect = connect(mapStateToProps, null);

export const Component = compose(withConnect)(Cart);
