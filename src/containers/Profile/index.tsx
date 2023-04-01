import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import UserProfile from '../../components/UserProfile';
import SideBarUser from '../../components/SideBarUser';

function Profile() {
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <UserProfile />
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Profile;
