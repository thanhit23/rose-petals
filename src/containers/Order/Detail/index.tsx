import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import LayoutMain from 'src/components/LayoutMain';
import OrderDetailComponent from 'src/components/OrderDetail';
import SideBarUser from 'src/components/SideBarUser';

function OrderDetail() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <OrderDetailComponent />
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default OrderDetail;
