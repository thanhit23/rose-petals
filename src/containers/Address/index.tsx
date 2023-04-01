import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import LayoutMain from '../../components/LayoutMain';
import SideBarUser from '../../components/SideBarUser';
import ListAddress from '../../components/ListAddress';

function Address() {
  const listAddress = [
    {
      id: 'd27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Office',
      addressLine: '497 Erdman Passage, New Zoietown',
      phoneNumber: '(213) 840-9416',
    },
    {
      id: 'd27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Shop',
      addressLine: '8000 Evans Brooks, Lake Jo',
      phoneNumber: '345-510-1406',
    },
    {
      id: 'd27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Garage',
      addressLine: '978 Elton Springs, Eribertoview',
      phoneNumber: '(932) 581-1393',
    },
    {
      id: 'd27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Coffee House',
      addressLine: '3899 Gutkowski Views, North Claudiamouth',
      phoneNumber: '201.292.9655 x140',
    },
    {
      id: 'd27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Italian Restaurant',
      addressLine: '789 Spencer Lock, Lolitaberg',
      phoneNumber: '445-946-3391',
    },
  ];

  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <ListAddress listAddress={listAddress} />
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default Address;
