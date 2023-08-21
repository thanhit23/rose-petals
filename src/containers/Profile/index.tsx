import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import SideBarUser from 'src/components/SideBarUser';
import UserProfile from 'src/components/UserProfile';

function Profile() {
  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <UserProfile />
      </Grid>
    </Container>
  );
}

export const Component = Profile;
