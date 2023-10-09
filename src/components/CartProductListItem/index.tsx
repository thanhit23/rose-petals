import { useState } from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import { formatPrice } from '../../helpers';
import styles from './styles';
import { Props } from './types';

function CartProductListItem({ productCart }: Props) {
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
        sx={styles.avatar}
        width="140px"
        height="140px"
        component="img"
        src={productCart.product.images}
        alt={productCart.product.name}
      />
      <IconButton aria-label="close" size="small" sx={styles.iconClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
      <Box sx={styles.informationProduct}>
        <Box sx={styles.inforNameProduct}>
          <Link to="/">
            <Box component="span" sx={styles.nameProduct}>
              {productCart.product.name}
            </Box>
          </Link>
        </Box>
        <Box sx={styles.wrapperPrice}>
          <Box component="span" sx={styles.priceXQuantity}>
            {formatPrice.format(productCart.product.price)} x {quantity}
          </Box>
          <Box component="span" sx={styles.totalPrice}>
            {formatPrice.format(productCart.product.price * quantity)}
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

export default CartProductListItem;
