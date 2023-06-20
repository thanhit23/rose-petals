import { Link } from 'react-router-dom';

import EastIcon from '@mui/icons-material/East';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import styles from './styles';

function ItemOrder() {
  return (
    <Link to="/order/f0ba538b">
      <Paper sx={styles.paperItem}>
        <Box component="h5" sx={styles.codeItem}>
          f0ba538b
        </Box>
        <Box sx={styles.boxChipItem}>
          <Chip label="Pending" sx={styles.chipStatus} />
        </Box>
        <Typography sx={styles.orderItem}>Nov 10, 2022</Typography>
        <Typography sx={styles.orderItem}>$350.00</Typography>
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
