import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import styles from './styles';
import { home } from './icons';
import messages from './messages';

function NavigateBar() {
  return (
    <Box sx={styles.boxNavigate}>
      <Box component={Link} to="/" sx={styles.linkPage}>
        <SvgIcon fontSize="small" viewBox="0 0 24 24">
          {home}
        </SvgIcon>
        <FormattedMessage {...messages.home} />
      </Box>
      <Box component={Link} to="/" sx={styles.linkPage}>
        <SvgIcon fontSize="small" viewBox="0 0 24 24">
          {home}
        </SvgIcon>
        <FormattedMessage {...messages.category} />
      </Box>
      <Box component={Link} to="/cart" sx={styles.linkPage}>
        <Badge badgeContent={3} color="secondary" sx={styles.badge}>
          <ShoppingBagOutlinedIcon color="action" />
        </Badge>
        <FormattedMessage {...messages.cart} />
      </Box>
      <Box component={Link} to="/profile" sx={styles.linkPage}>
        <SvgIcon fontSize="small" viewBox="0 0 24 24">
          {home}
        </SvgIcon>
        <FormattedMessage {...messages.profile} />
      </Box>
    </Box>
  );
}

export default NavigateBar;
