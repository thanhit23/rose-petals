import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../../components/LayoutMain';
import SideBarUser from '../../../components/SideBarUser';
import AddressEditComponent from '../../../components/AddressEdit';

function AddressEdit() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <AddressEditComponent />
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default AddressEdit;
