import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import _ from 'lodash';
import { compose } from 'redux';

import { State } from 'src/common/types';
import { useGetListOrder } from 'src/queries/order';

import { AuthType } from '../../containers/Authenticated/types';
import HeaderHoldUser from '../HeaderHoldUser';
import { DELIVERED, DELIVERING, ORDERED } from '../ItemOrder/orderStatus';
import messages from './messages';
import styles from './styles';

type Props = {
  auth: AuthType;
};

const UserProfile: React.FC<Props> = ({ auth }) => {
  const { data } = useGetListOrder();
  const listOrder = data?.data;

  const renderStatus = (status: number) => {
    if (status === 1) {
      return ORDERED;
    } else if (status === 2) {
      return DELIVERING;
    } else if (status === 3) {
      return DELIVERED;
    }
  };

  const renderAwaitingShipment = () => {
    const listOrderAwaitingShipment = listOrder?.filter((order: any) => renderStatus(order.status) === ORDERED);
    return _.size(listOrderAwaitingShipment);
  };

  const renderAwaitingDelivery = () => {
    const listOrderAwaitingShipment = listOrder?.filter((order: any) => renderStatus(order.status) === DELIVERING);
    return _.size(listOrderAwaitingShipment);
  };

  return (
    <Grid item xs={12} lg={9}>
      <HeaderHoldUser
        path={`/profile/${auth.id}`}
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
                      {auth.name}
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
                    {data?.meta?.totalResults || 0}
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
                    {renderAwaitingShipment()}
                  </Box>
                  <Box component="small" sx={styles.paperStatsTitle}>
                    <FormattedMessage {...messages.awaitingShipment} />
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper sx={styles.paperStats}>
                  <Box component="h3" sx={styles.paperStatsNumber}>
                    {renderAwaitingDelivery()}
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
            <FormattedMessage {...messages.name} />
          </Box>
          <span>{auth.name}</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.email} />
          </Box>
          <span>{auth.email}</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.phone} />
          </Box>
          <span>{auth.phoneNumber}</span>
        </Box>
        <Box sx={styles.wrapperInfo}>
          <Box component="small" className="title">
            <FormattedMessage {...messages.gender} />
          </Box>
          <span>{auth.gender === 1 ? 'Female' : 'Male'}</span>
        </Box>
      </Paper>
    </Grid>
  );
};

const mapStateToProps = ({ global: { auth } }: State) => ({
  auth,
});

const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(UserProfile);
