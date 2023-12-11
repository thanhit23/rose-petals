import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Delete from '@mui/icons-material/Delete';
import EastIcon from '@mui/icons-material/East';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteOrder } from 'src/api/order';
import { formatDate, formatPrice } from 'src/helpers';
import { PATH_AUTH } from 'src/routes/paths';

import ModalDelete from '../ModalDelete';
import messages from './messages';
import { CANCELLED, DELIVERED, DELIVERING, ORDERED } from './orderStatus';
import styles from './styles';
import { ItemOrderTypes } from './types';

type Props = {
  itemOrder: ItemOrderTypes;
};

const ItemOrder: React.FC<Props> = ({ itemOrder }) => {
  const queryClient = useQueryClient();
  const [modalDeleteOrder, setModalDeleteOrder] = useState(false);

  const renderStatus = (status: number) => {
    if (status === 0) {
      return CANCELLED;
    } else if (status === 1) {
      return ORDERED;
    } else if (status === 2) {
      return DELIVERING;
    } else if (status === 3) {
      return DELIVERED;
    }
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: (id: string) => deleteOrder(id),
  });

  const handleDeleteOrder = () => {
    mutate(itemOrder._id, {
      onSuccess: async ({ data: { status } }) => {
        if (status) {
          await queryClient.invalidateQueries({
            queryKey: ['getListOrder'],
          });

          toast.success(<FormattedMessage {...messages.deleteOrderSuccess} />);
        } else {
          toast.error(<FormattedMessage {...messages.deleteOrderFailed} />);
        }
      },
    });
  };

  return (
    <React.Fragment>
      <Box style={{ position: 'relative' }}>
        <Paper sx={styles.paperItem} key={itemOrder._id}>
          <Box component="h5" sx={styles.codeItem}>
            {itemOrder.user.name}
          </Box>
          <Box sx={styles.boxChipItem}>
            <Chip label={renderStatus(itemOrder.status)} sx={styles.chipStatus} />
          </Box>
          <Typography sx={styles.orderItem}>{formatDate(itemOrder.createdAt)}</Typography>
          <Typography sx={styles.orderItem}>{formatPrice.format(itemOrder.amount)}</Typography>
          {renderStatus(itemOrder.status) === CANCELLED && !isLoading && (
            <Typography sx={styles.boxActionIcon}>
              <Box onClick={() => setModalDeleteOrder(true)}>
                <IconButton aria-label="east">
                  <Delete fontSize="small" />
                </IconButton>
              </Box>
            </Typography>
          )}
          {isLoading && (
            <Typography sx={styles.boxActionIcon}>
              <Box>
                <IconButton aria-label="east">
                  <RotateRightIcon fontSize="small" sx={styles.loadingIcon} />
                </IconButton>
              </Box>
            </Typography>
          )}
          <Typography>
            <Link to={`${PATH_AUTH.order.id(itemOrder._id)}`}>
              <IconButton aria-label="east">
                <EastIcon fontSize="small" />
              </IconButton>
            </Link>
          </Typography>
        </Paper>
      </Box>
      <ModalDelete
        content={<FormattedMessage {...messages.deleteThisOrder} />}
        openModal={modalDeleteOrder}
        handleCloseModal={() => setModalDeleteOrder(false)}
        onDelete={handleDeleteOrder}
      />
    </React.Fragment>
  );
};

export default ItemOrder;
