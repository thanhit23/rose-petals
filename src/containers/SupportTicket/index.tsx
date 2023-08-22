import { FormattedMessage } from 'react-intl';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';

import HeaderHoldUser from 'src/components/HeaderHoldUser';
import SideBarUser from 'src/components/SideBarUser';
import SupportTicketItem from 'src/components/SupportTicketItem';
import { icons } from 'src/components/common';

import messages from './messages';

function SupportTicket() {
  const renderIconSupport = <SvgIcon viewBox="0 0 64 64">{icons.support}</SvgIcon>;

  return (
    <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
      <Grid container spacing={{ xs: 3 }}>
        <SideBarUser />
        <Grid item xs={12} lg={9}>
          <HeaderHoldUser icon={renderIconSupport} title={<FormattedMessage {...messages.title} />} />
          <SupportTicketItem />
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = SupportTicket;
