import { FormattedMessage } from 'react-intl';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SvgIcon from '@mui/material/SvgIcon';

import FeedbackSupportTicket from 'src/components/FeedbackSupportTicket';
import HeaderHoldUser from 'src/components/HeaderHoldUser';
import LayoutMain from 'src/components/LayoutMain';
import SideBarUser from 'src/components/SideBarUser';
import { icons } from 'src/components/common';

import messages from '../messages';

function DetailSupportTicket() {
  const renderIconSupport = <SvgIcon viewBox="0 0 64 64">{icons.support}</SvgIcon>;

  return (
    <>
      <LayoutMain>
        <Container maxWidth="lg" sx={{ margin: '2rem auto' }}>
          <Grid container spacing={{ xs: 3 }}>
            <SideBarUser />
            <Grid item xs={12} lg={9}>
              <HeaderHoldUser
                path="/support-tickets"
                icon={renderIconSupport}
                title={<FormattedMessage {...messages.title} />}
                button={<FormattedMessage {...messages.btnBackToSupport} />}
              />
              <FeedbackSupportTicket />
            </Grid>
          </Grid>
        </Container>
      </LayoutMain>
    </>
  );
}

export default DetailSupportTicket;
