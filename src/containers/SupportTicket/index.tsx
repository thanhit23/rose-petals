import { FormattedMessage } from 'react-intl';

import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';
import Container from '@mui/material/Container';

import messages from './messages';
import { icons } from '../../components/common';
import LayoutMain from '../../components/LayoutMain';
import SideBarUser from '../../components/SideBarUser';
import HeaderHoldUser from '../../components/HeaderHoldUser';
import SupportTicketItem from '../../components/SupportTicketItem';

function SupportTicket() {
  const renderIconSupport = <SvgIcon viewBox="0 0 64 64">{icons.support}</SvgIcon>;

  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
        <Grid container spacing={{ xs: 3 }}>
          <SideBarUser />
          <Grid item xs={12} lg={9}>
            <HeaderHoldUser
              path="/support-tickets"
              icon={renderIconSupport}
              title={<FormattedMessage {...messages.title} />}
            />
            <SupportTicketItem />
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default SupportTicket;
