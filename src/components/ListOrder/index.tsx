import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import styles from './styles';
import messages from './messages';
import ItemOrder from '../ItemOrder';

function ListOrder() {
  return (
    <>
      <Box sx={styles.containerTitle}>
        <Box sx={styles.wrapperTitle}>
          <Box sx={styles.boxTitle}>
            <ShoppingBagIcon fontSize="medium" />
            <Box component="h2" sx={styles.title}>
              <FormattedMessage {...messages.title} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Paper elevation={0} sx={styles.paperHeaderList}>
        <Box component="h5" sx={styles.headerItem}>
          <FormattedMessage {...messages.order} />
        </Box>
        <Box component="h5" sx={styles.headerItem}>
          <FormattedMessage {...messages.status} />
        </Box>
        <Box component="h5" sx={styles.headerItem}>
          <FormattedMessage {...messages.datePurchased} />
        </Box>
        <Box component="h5" sx={styles.headerItem}>
          <FormattedMessage {...messages.total} />
        </Box>
        <Box
          component="h5"
          sx={{
            ...styles.headerItem,
            ...styles.headerItemLast,
          }}
        />
      </Paper>
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
      <ItemOrder />
    </>
  );
}

export default ListOrder;
