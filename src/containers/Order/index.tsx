import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import ListOrder from '../../components/ListOrder';
import LayoutMain from '../../components/LayoutMain';
import Pagination from '../../components/Pagination';
import SideBarUser from '../../components/SideBarUser';

function Order() {
  const handleChangePage = (value: number) => {
    console.log(value);
  };
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <Grid item xs={12} lg={9}>
            <ListOrder />
            <Pagination count={5} onChange={handleChangePage} />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Order;
