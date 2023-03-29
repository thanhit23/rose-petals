import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

import styles from './styles';
import messages from './messages';
import HeaderHoldUser from '../HeaderHoldUser';

function UserProfile() {
  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        path="/profile/123asdasd13"
        icon={<PersonIcon fontSize="medium" />}
        title={<FormattedMessage {...messages.title} />}
        button={<FormattedMessage {...messages.editProfile} />}
      />
      <Box marginBottom="32px">
        <Grid container spacing={{ xs: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper sx={styles.paperInfoUser}>
              <Avatar src="https://bazar-react.vercel.app/assets/images/faces/ralph.png" sx={styles.avatar} />
              <Box sx={styles.boxInfoUser}>
                <Box className="wrap-info">
                  <Box>
                    <Box component="h5" sx={styles.nameUser}>
                      Nick DuBuque
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Typography sx={styles.typographyBalance}>
                        <FormattedMessage {...messages.balance} />
                      </Typography>
                      <Typography sx={styles.typographyBalancePrice}>$500.00</Typography>
                    </Box>
                  </Box>
                  <Typography sx={styles.typographyRank}>
                    <FormattedMessage {...messages.silverUser} />
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={{ xs: 4 }}>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper sx={styles.paperStats}>
                  <Box component="h3" sx={styles.paperStatsNumber}>
                    16
                  </Box>
                  <Box component="small" sx={styles.paperStatsTitle}>
                    <FormattedMessage {...messages.allOrders} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper sx={styles.paperStats}>
                  <Box component="h3" sx={styles.paperStatsNumber}>
                    02
                  </Box>
                  <Box component="small" sx={styles.paperStatsTitle}>
                    <FormattedMessage {...messages.awaitingPayments} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper sx={styles.paperStats}>
                  <Box component="h3" sx={styles.paperStatsNumber}>
                    00
                  </Box>
                  <Box component="small" sx={styles.paperStatsTitle}>
                    <FormattedMessage {...messages.awaitingShipment} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper sx={styles.paperStats}>
                  <Box component="h3" sx={styles.paperStatsNumber}>
                    01
                  </Box>
                  <Box component="small" sx={styles.paperStatsTitle}>
                    <FormattedMessage {...messages.awaitingDelivery} />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Paper sx={styles.paperDetailInfo}>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.firstName} />
          </Box>
          <span>Nick</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.lastName} />
          </Box>
          <span>DuBuque</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.email} />
          </Box>
          <span>Jayden.Gislason78@gmail.com</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.phone} />
          </Box>
          <span>(445) 653-3771 x985</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.birthDate} />
          </Box>
          <span>26 Apr, 1996</span>
        </Box>
      </Paper>
    </Grid>
  );
}

export default UserProfile;
