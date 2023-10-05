import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { Place } from '@mui/icons-material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import HeaderHoldUser from 'src/components/HeaderHoldUser';
import ItemAddress from 'src/components/ItemAddress';
import Pagination from 'src/components/Pagination';
import SideBarUser from 'src/components/SideBarUser';

import messages from './messages';

function Address() {
  const listAddress = [
    {
      id: 'r27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
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
      id: 'y27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Garage',
      addressLine: '978 Elton Springs, Eribertoview',
      phoneNumber: '(932) 581-1393',
    },
    {
      id: 'k27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Coffee House',
      addressLine: '3899 Gutkowski Views, North Claudiamouth',
      phoneNumber: '201.292.9655 x140',
    },
    {
      id: 'n27d0e28-c35e-4085-af1e-f9f1b1bd9c34',
      address: 'Italian Restaurant',
      addressLine: '789 Spencer Lock, Lolitaberg',
      phoneNumber: '445-946-3391',
    },
  ];

  const handleChangePage = (value: number) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <HeaderHoldUser
            path="/address/add"
            icon={<Place fontSize="medium" />}
            title={<FormattedMessage {...messages.title} />}
            button={<FormattedMessage {...messages.btnAddAddress} />}
          />
          <ItemAddress listAddress={listAddress} />
          <Pagination count={5} onChange={handleChangePage} />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = Address;
