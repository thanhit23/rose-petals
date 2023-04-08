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

  const barItemsTop = [
    {
      path: '/order',
      icon: <ShoppingBagOutlinedIcon fontSize="small" />,
      title: <FormattedMessage {...messages.orders} />,
      quantity: 5,
    },
    {
      path: '/wish-list',
      icon: <FavoriteBorderIcon fontSize="small" />,
      title: <FormattedMessage {...messages.wishlist} />,
      quantity: 19,
    },
    {
      path: '/support-tickets',
      icon: (
        <SvgIcon component="svg" viewBox="0 0 64 64" fontSize="small">
          {supportTicked}
        </SvgIcon>
      ),
      title: <FormattedMessage {...messages.supportTickets} />,
      quantity: 1,
    },
  ];

  const barItemsBottom = [
    {
      path: '/profile',
      icon: <PersonIcon fontSize="small" />,
      title: <FormattedMessage {...messages.ProfileInfo} />,
      quantity: 3,
    },
    {
      path: '/address',
      icon: <PlaceIcon fontSize="small" />,
      title: <FormattedMessage {...messages.addresses} />,
      quantity: 16,
    },
    {
      path: '/payment-methods',
      icon: <CreditCardIcon fontSize="small" />,
      title: <FormattedMessage {...messages.paymentMethods} />,
      quantity: 1,
    },
  ];

  return (
    <Grid item xs={12} lg={3}>
      <Paper sx={styles.paperContainer}>
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.dashboard} />
        </Typography>
        {barItemsTop.map(({ path, icon, title, quantity }, i) => (
          <Link key={i} to={path}>
            <Box sx={{ ...styles.boxItem, ...activeItem(path) }}>
              <Box sx={styles.boxTitle}>
                {icon}
                <Box component="span">{title}</Box>
              </Box>
              <Box component="span">{quantity}</Box>
            </Box>
          </Link>
        ))}
        <Typography sx={styles.typographyTitle}>
          <FormattedMessage {...messages.accountSetting} />
        </Typography>
        {barItemsBottom.map(({ path, icon, title, quantity }, i) => (
          <Link key={i} to={path}>
            <Box sx={{ ...styles.boxItem, ...activeItem(path) }}>
              <Box sx={styles.boxTitle}>
                {icon}
                <Box component="span">{title}</Box>
              </Box>
              <Box component="span">{quantity}</Box>
            </Box>
          </Link>
        ))}
      </Paper>
    </Grid>
  );
}

export default SideBarUser;
