import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormEditProfileUser from 'src/components/FormEditProfileUser';
import LayoutMain from 'src/components/LayoutMain';
import SideBarUser from 'src/components/SideBarUser';

function Profile() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <FormEditProfileUser />
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Profile;
