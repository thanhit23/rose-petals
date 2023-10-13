import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FormEditProfileUser from 'src/components/FormEditProfileUser';
import SideBarUser from 'src/components/SideBarUser';

function Profile() {
  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <FormEditProfileUser />
      </Grid>
    </Container>
  );
}

export const Component = Profile;
