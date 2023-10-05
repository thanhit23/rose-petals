import React from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';

import formatterPrice from 'src/helpers/formatPrice';
import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';
import { Props } from './types';

function Product({ data, onClose }: Props) {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    if (counter < 10) setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <Box sx={styles.containerProduct}>
      <Box sx={styles.boxWrapBtnPlusMinus}>
        <Button onClick={handleIncrement} sx={styles.btnPlusMinus}>
          +
        </Button>
        <Box sx={styles.boxCounter}>{counter}</Box>
        <Button onClick={handleDecrement} sx={styles.btnPlusMinus}>
          -
        </Button>
      </Box>
      <Link to={PATH_PUBLIC.product.slug(data.product.slug, data.product._id)}>
        <Avatar src={data.product.images} sx={styles.avatar} />
      </Link>
      <Box sx={styles.boxInformationProduct}>
        <Link to={PATH_PUBLIC.product.slug(data.product.slug, data.product._id)} style={styles.linkNameProduct}>
          <Box component="h5" sx={styles.boxNameProduct}>
            {data.product.name}
          </Box>
        </Link>
        <Box component="small" sx={styles.boxPrice}>
          {formatterPrice.format(data.product.price)} x {data.quantity}
        </Box>
        <Box sx={styles.boxTotalPrice}>{formatterPrice.format(data.product.price * data.quantity)}</Box>
      </Box>
      <ButtonBase onClick={() => onClose()} sx={styles.buttonBaseClose}>
        <CloseIcon />
      </ButtonBase>
    </Box>
  );
}

export default Product;
