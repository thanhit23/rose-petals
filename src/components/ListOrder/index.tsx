import React from 'react';
import { FormattedMessage } from 'react-intl';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { isEmpty } from 'lodash';

import noOrder from 'src/resources/images/noOrder.jpg';

import ItemOrder from '../ItemOrder';
import { ItemOrderTypes } from '../ItemOrder/types';
import Loading from './Loading';
import messages from './messages';
import styles from './styles';

type Props = {
  listOrder: ItemOrderTypes[];
  isLoading: boolean;
};

function ListOrder({ listOrder, isLoading }: Props) {
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
      {isLoading ? (
        <Loading />
      ) : !isEmpty(listOrder) ? (
        listOrder?.map((itemOrder: ItemOrderTypes) => <ItemOrder key={itemOrder._id} itemOrder={itemOrder} />)
      ) : (
        <Avatar src={noOrder} alt="No order" sx={styles.noOrder} />
      )}
    </React.Fragment>
  );
}

export default ListOrder;
