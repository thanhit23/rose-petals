import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import ListOrder from 'src/components/ListOrder';
import Pagination from 'src/components/Pagination';
import SideBarUser from 'src/components/SideBarUser';

function Order() {
  const handleChangePage = (value: number) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };
  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <ListOrder />
          <Pagination count={5} onChange={handleChangePage} />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = Order;
