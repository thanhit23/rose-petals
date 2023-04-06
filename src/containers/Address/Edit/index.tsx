import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import { Place } from '@mui/icons-material';
import Container from '@mui/material/Container';

import messages from './messages';
import LayoutMain from '../../../components/LayoutMain';
import SideBarUser from '../../../components/SideBarUser';
import FormAddress from '../../../components/FormAddress';
import HeaderHoldUser from '../../../components/HeaderHoldUser';

function AddressEdit() {
  const defaultValue = {
    name: 'Office',
    addressLine: '497 Erdman Passage, New Zoietown',
    phone: '(213) 840-9416',
  };
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <Grid item xs={12} lg={9}>
            <HeaderHoldUser
              path="/address"
              icon={<Place fontSize="medium" />}
              title={<FormattedMessage {...messages.title} />}
              button={<FormattedMessage {...messages.btnBackAddress} />}
            />
            <FormAddress defaultValue={defaultValue} />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default AddressEdit;
