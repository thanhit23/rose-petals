import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import SideBarUser from '../../components/SideBarUser';
import ListPaymentMethod from '../../components/ListPaymentMethod';

function PaymentMethod() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <Grid item xs={12} lg={9}>
            <ListPaymentMethod />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default PaymentMethod;
