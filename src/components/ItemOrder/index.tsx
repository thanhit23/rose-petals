import { Link } from 'react-router-dom';

import EastIcon from '@mui/icons-material/East';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { format } from 'date-fns';

import { formatPrice } from 'src/helpers';

import { DELIVERED, DELIVERING, ORDERED } from './orderStatus';
import styles from './styles';
import { ItemOrderTypes } from './types';

type Props = {
  itemOrder: ItemOrderTypes;
};

function ItemOrder({ itemOrder }: Props) {
  const formattedDate = format(new Date(itemOrder.createdAt), 'MMM d, yyyy');

  const renderStatus = (status: number) => {
    if (status === 1) {
      return ORDERED;
    } else if (status === 2) {
      return DELIVERING;
    } else if (status === 3) {
      return DELIVERED;
    }
  };

  return (
    <Link to="/order/f0ba538b">
      <Paper sx={styles.paperItem} key={itemOrder._id}>
        <Box component="h5" sx={styles.codeItem}>
          {itemOrder.user.name}
        </Box>
        <Box sx={styles.boxChipItem}>
          <Chip label={renderStatus(itemOrder.status)} sx={styles.chipStatus} />
        </Box>
        <Typography sx={styles.orderItem}>{formattedDate}</Typography>
        <Typography sx={styles.orderItem}>{formatPrice.format(itemOrder.amount)}</Typography>
        <Typography>
          <IconButton aria-label="east">
            <EastIcon fontSize="small" />
          </IconButton>
        </Typography>
      </Paper>
    </Link>
  );
}

export default ItemOrder;
