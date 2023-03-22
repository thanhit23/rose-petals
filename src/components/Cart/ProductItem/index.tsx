import { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

import styles from './styles';
import { formatPrice } from '../../../helpers';

function ProductItem() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleReduce = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  return (
    <Paper sx={styles.paper}>
      <Box
        width="140px"
        height="140px"
        component="img"
        src="https://bazar-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"
      />
      <IconButton aria-label="close" size="small" sx={styles.iconClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
      <Box sx={styles.informationProduct}>
        <Link to="/">
          <Box component="span" sx={styles.nameProduct}>
            Silver High Neck Sweater
          </Box>
        </Link>
        <Box sx={styles.wrapperPrice}>
          <Box component="span" sx={styles.priceXQuantity}>
            $210.00 x {quantity}
          </Box>
          <Box component="span" sx={styles.totalPrice}>
            {formatPrice.format(210 * quantity)}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="outlined" sx={styles.btnIncrease} onClick={handleIncrease}>
            <RemoveIcon fontSize="small" />
          </Button>
          <Box sx={styles.boxQuantity}>{quantity}</Box>
          <Button variant="outlined" sx={styles.btnReduce} onClick={handleReduce}>
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default ProductItem;
