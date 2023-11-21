import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import ItemOrder from '../ItemOrder';
import { ItemOrderTypes } from '../ItemOrder/types';
import messages from './messages';
import styles from './styles';

type Props = {
  listOrder: ItemOrderTypes[];
};

function ListOrder({ listOrder }: Props) {
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
        {listOrder?.length > 0 && (
          <>
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
          </>
        )}
        <Box
          component="h5"
          sx={{
            ...styles.headerItem,
            ...styles.headerItemLast,
          }}
        />
      </Paper>
      {listOrder?.length > 0 ? (
        listOrder?.map((itemOrder: ItemOrderTypes) => <ItemOrder itemOrder={itemOrder} key={itemOrder._id} />)
      ) : (
        <Avatar src="/noorder.jpg" sx={styles.noOrder} />
      )}
    </>
  );
}

export default ListOrder;
