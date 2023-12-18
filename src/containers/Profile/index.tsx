import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';

import SideBarUser from 'src/components/SideBarUser';
import UserProfile from 'src/components/UserProfile';

import { getAnalytics } from './services';

function Profile() {
  const { data: analytics = {} } = useQuery({
    queryKey: ['getAnalytics'],
    queryFn: () => getAnalytics(),
    select: ({ data: { data } }) => data,
  });

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <UserProfile analytics={analytics} />
      </Grid>
    </Container>
  );
}

export const Component = Profile;
