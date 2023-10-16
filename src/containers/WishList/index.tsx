import React from 'react';
import { FormattedMessage } from 'react-intl';

import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HeaderHoldUser from 'src/components/HeaderHoldUser';
import Pagination from 'src/components/Pagination';
import ProductItem from 'src/components/ProductItem';
import SideBarUser from 'src/components/SideBarUser';
import { products } from 'src/mockData';

import messages from './messages';

function WishList() {
  const handleProductSearch = () => {
    // eslint-disable-next-line no-console
    console.log(123);
  };
  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <HeaderHoldUser
            icon={<FavoriteIcon />}
            title={<FormattedMessage {...messages.wishList} />}
            button={<FormattedMessage {...messages.btnAddAllToCart} />}
          />
          <Grid container spacing={{ xs: 3 }}>
            {products.map(product => (
              <ProductItem key={product._id} product={product} />
            ))}
          </Grid>
          <Pagination count={10} onChange={handleProductSearch} />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = WishList;
