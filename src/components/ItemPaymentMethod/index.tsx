import { Link } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import styles from './styles';

function ItemPaymentMethod() {
  return (
    <Paper sx={styles.paperItem}>
      <Box sx={styles.codeItemTitle}>
        <Box sx={styles.imgPayment}>
          <img src="https://bazar-react.vercel.app/assets/images/payment-methods/Amex.svg" alt="" />
        </Box>
        <Box component="h5">Ralf Edward</Box>
      </Box>
      <Typography sx={styles.orderItem}>1234 **** **** ****</Typography>
      <Typography sx={styles.orderItem}>08 / 2022</Typography>
      <Typography>
        <Link to="/payment-method/f0ba538b">
          <IconButton aria-label="east">
            <EditIcon fontSize="small" />
          </IconButton>
        </Link>
        <IconButton aria-label="east">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Typography>
    </Paper>
  );
}

export default ItemPaymentMethod;
