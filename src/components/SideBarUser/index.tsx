import { FormattedMessage } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';

import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useGetListOrder } from 'src/queries/order';

import messages from './messages';
import styles from './styles';
import { BarItem } from './types';

const SideBarUser: React.FC = () => {
  const { pathname } = useLocation();
  const { data } = useGetListOrder();

  const activeItem = (path: string) => {
    const regex = new RegExp(path);
    if (pathname.search(regex) != -1) return styles.active;

    return styles.unActive;
  };

  const barItems: BarItem[] = [
    {
      path: '/profile',
      icon: <PersonIcon fontSize="small" />,
      title: <FormattedMessage {...messages.ProfileInfo} />,
    },
    {
      path: '/order',
      icon: <ShoppingBagOutlinedIcon fontSize="small" />,
      title: <FormattedMessage {...messages.orders} />,
      quantity: data?.meta?.totalResults || 0,
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
          <FormattedMessage {...messages.settings} />
        </Typography>
        {barItems.map(({ path, icon, title, quantity }, i) => (
          <Link key={i} to={path}>
            <Box sx={{ ...styles.boxItem, ...activeItem(path) }}>
              <Box sx={styles.boxTitle}>
                {icon}
                <span>{title}</span>
              </Box>
              {quantity && <span>{quantity}</span>}
            </Box>
          </Link>
        ))}
      </Paper>
    </Grid>
  );
};

export default SideBarUser;
