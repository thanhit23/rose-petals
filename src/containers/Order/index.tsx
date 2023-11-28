import * as React from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import _ from 'lodash';

import ListOrder from 'src/components/ListOrder';
import Pagination from 'src/components/Pagination';
import SideBarUser from 'src/components/SideBarUser';
import { useGetListOrder } from 'src/queries/order';

function Order() {
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const { data } = useGetListOrder(currentPage);

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <ListOrder listOrder={data?.data} />
          {_.size(data?.data) > 0 && (
            <Pagination count={data?.meta?.totalPages} page={data?.meta?.page} onChange={handleChangePage} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = Order;
