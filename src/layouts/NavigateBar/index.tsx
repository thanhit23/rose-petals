import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import GridViewIcon from '@mui/icons-material/GridView';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';

import { home } from './icons';
import messages from './messages';
import styles from './styles';

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
          <GridViewIcon />
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
          <PersonOutlineIcon color="action" />
        </SvgIcon>
        <FormattedMessage {...messages.profile} />
      </Box>
    </Box>
  );
}

export default NavigateBar;
