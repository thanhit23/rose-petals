import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import styles from './styles';

interface PaymentMethod {
  id: number;
  name: string;
  image: string;
}

type Props = {
  paymentMethod: PaymentMethod;
};

const ItemPaymentMethod: React.FC<Props> = ({ paymentMethod }) => (
  <Paper sx={styles.paperItem}>
    <Box sx={styles.codeItemTitle}>
      <Box sx={styles.imgPayment}>
        <Box component={'img'} src={paymentMethod.image} alt={paymentMethod.name} sx={styles.paymentImage} />
      </Box>
      <Box component="h5">{paymentMethod.name}</Box>
    </Box>
    <Typography sx={styles.orderItem}>12 / 2023</Typography>
  </Paper>
);

export default ItemPaymentMethod;
