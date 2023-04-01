import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../../components/LayoutMain';
import SideBarUser from '../../../components/SideBarUser';
import AddressAdd from '../../../components/AddressAdd';

function Address() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <AddressAdd />
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Address;
