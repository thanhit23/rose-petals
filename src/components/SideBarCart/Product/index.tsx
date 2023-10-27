import React from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import formatterPrice from 'src/helpers/formatPrice';
import { deleteSideBarCart } from 'src/layouts/Header/httpClients';
import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';
import { Props } from './types';

function Product({ data }: Props) {
  const token = localStorage.getItem('accessToken') || '';

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteSideBarCart(data._id),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ['getProductCartList', token],
        exact: true,
      });
    },
  });
  const handleDelete = () => {
    mutate();
  };

  const [quantity, setQuantity] = React.useState(1);
  const handleIncrement = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };
  return (
    <Box sx={styles.containerProduct}>
      <Box sx={styles.boxWrapBtnPlusMinus}>
        <Button onClick={handleIncrement} sx={styles.btnPlusMinus}>
          +
        </Button>
        <Box sx={styles.boxCounter}>{quantity}</Box>
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
          {formatterPrice.format(data.product.price * quantity)}
        </Box>
        <Box sx={styles.boxTotalPrice}>{formatterPrice.format(data.product.price * quantity)}</Box>
      </Box>
      <ButtonBase onClick={() => handleDelete()} sx={styles.buttonBaseClose}>
        <CloseIcon />
      </ButtonBase>
    </Box>
  );
}

export default Product;
