import React from 'react';
import { FormattedMessage } from 'react-intl';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import _ from 'lodash';

import ItemOrder from '../ItemOrder';
import { ItemOrderTypes } from '../ItemOrder/types';
import messages from './messages';
import styles from './styles';

type Props = {
  listOrder: ItemOrderTypes[];
};

function ListOrder({ listOrder }: Props) {
  return (
    <React.Fragment>
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
        {_.size(listOrder) > 0 && (
          <React.Fragment>
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
          </React.Fragment>
        )}
        <Box
          component="h5"
          sx={{
            ...styles.headerItem,
            ...styles.headerItemLast,
          }}
        />
      </Paper>
      {_.size(listOrder) > 0 ? (
        listOrder?.map((itemOrder: ItemOrderTypes) => <ItemOrder itemOrder={itemOrder} key={itemOrder._id} />)
      ) : (
        <Avatar src="/noorder.jpg" sx={styles.noOrder} />
      )}
    </React.Fragment>
  );
}

export default ListOrder;
