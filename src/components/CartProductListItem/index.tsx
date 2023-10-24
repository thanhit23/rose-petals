import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import { ProductCart } from 'src/components/SideBarCart/types';
import { formatPrice } from 'src/helpers';
import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';

type Props = {
  productCart: ProductCart;
};

const CartProductListItem: React.FC<Props> = ({ productCart }) => {
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
      <Box padding="16px">
        <Link to={PATH_PUBLIC.product.slug(productCart.product?.slug, productCart.product?._id)}>
          <Box
            sx={styles.avatar}
            width="110px"
            height="110px"
            component="img"
            src={productCart.product.images}
            alt={productCart.product.name}
          />
        </Link>
      </Box>
      <IconButton aria-label="close" size="small" sx={styles.iconClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
      <Box sx={styles.informationProduct}>
        <Box sx={styles.inforNameProduct}>
          <Link to={PATH_PUBLIC.product.slug(productCart.product?.slug, productCart.product?._id)}>
            <Box component="span" sx={styles.nameProduct}>
              {productCart.product.name}
            </Box>
          </Link>
        </Box>
        <Box sx={styles.wrapperPrice}>
          <Box component="span" sx={styles.priceXQuantity}>
            {formatPrice.format(productCart.product.price)} x {productCart.quantity}
          </Box>
          <Box component="span" sx={styles.totalPrice}>
            {formatPrice.format(productCart.product.price * productCart.quantity)}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Button variant="outlined" sx={styles.btnIncrease} onClick={handleIncrease}>
            <RemoveIcon fontSize="small" />
          </Button>
          <Box sx={styles.boxQuantity}>{productCart.quantity}</Box>
          <Button variant="outlined" sx={styles.btnReduce} onClick={handleReduce}>
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CartProductListItem;
