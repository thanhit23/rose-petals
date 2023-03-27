import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { SvgIcon } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import styles from './styles';
import messages from './messages';
import { supportTicked } from './icons';

function SideBarUser() {
  const { pathname } = useLocation();

  const activeItem = (path: string) => {
    const regex = new RegExp(path);
    if (pathname.search(regex) != -1) return styles.active;

    return styles.unActive;
  };

  return (
    <Grid item xs={12} lg={3}>
      <Paper sx={styles.paperContainer}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.dashboard} />
        </Typography>
        <Link to="/order">
          <Box sx={{ ...styles.boxItem, ...activeItem('/order') }}>
            <Box sx={styles.boxTitle}>
              <ShoppingBagOutlinedIcon fontSize="small" />
              <Box component="span">
                <FormattedMessage {...messages.orders} />
              </Box>
            </Box>
            <Box component="span">5</Box>
          </Box>
        </Link>
        <Link to="/wish-list">
          <Box sx={{ ...styles.boxItem, ...activeItem('/wish-list') }}>
            <Box sx={styles.boxTitle}>
              <FavoriteBorderIcon fontSize="small" />
              <Box component="span">
                <FormattedMessage {...messages.wishlist} />
              </Box>
            </Box>
            <Box component="span">19</Box>
          </Box>
        </Link>
        <Link to="/support-tickers">
          <Box sx={{ ...styles.boxItem, ...activeItem('/support-tickers') }}>
            <Box sx={styles.boxTitle}>
              <SvgIcon component="svg" viewBox="0 0 64 64" fontSize="small">
                {supportTicked}
              </SvgIcon>
              <Box component="span">
                <FormattedMessage {...messages.supportTickers} />
              </Box>
            </Box>
            <Box component="span">1</Box>
          </Box>
        </Link>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.accountSetting} />
        </Typography>
        <Link to="/profile">
          <Box sx={{ ...styles.boxItem, ...activeItem('/profile') }}>
            <Box sx={styles.boxTitle}>
              <PersonIcon fontSize="small" />
              <Box component="span">
                <FormattedMessage {...messages.ProfileInfo} />
              </Box>
            </Box>
            <Box component="span">3</Box>
          </Box>
        </Link>
        <Link to="/address">
          <Box sx={{ ...styles.boxItem, ...activeItem('/address') }}>
            <Box sx={styles.boxTitle}>
              <PlaceIcon fontSize="small" />
              <Box component="span">
                <FormattedMessage {...messages.addresses} />
              </Box>
            </Box>
            <Box component="span">16</Box>
          </Box>
        </Link>
        <Link to="/payment-method">
          <Box sx={{ ...styles.boxItem, ...activeItem('/payment-method') }}>
            <Box sx={styles.boxTitle}>
              <CreditCardIcon fontSize="small" />
              <Box component="span">
                <FormattedMessage {...messages.paymentMethods} />
              </Box>
            </Box>
            <Box component="span">1</Box>
          </Box>
        </Link>
      </Paper>
    </Grid>
  );
}

export default SideBarUser;
