import React from 'react';
import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import FavoriteIcon from '@mui/icons-material/Favorite';

import messages from './messages';
import LayoutMain from '../../components/LayoutMain';
import SideBarUser from '../../components/SideBarUser';
import ProductItem from '../../components/ProductItem';
import HeaderHoldUser from '../../components/HeaderHoldUser';
import Pagination from '../../components/Pagination';

function WishList() {
  const handleProductSearch = () => {
    console.log('asdasdasd');
  };
  return (
    <LayoutMain>
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
              <ProductItem product={{}} />
              <ProductItem product={{}} />
              <ProductItem product={{}} />
              <ProductItem product={{}} />
              <ProductItem product={{}} />
              <ProductItem product={{}} />
            </Grid>
            <Pagination count={10} onChange={handleProductSearch} />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default WishList;
