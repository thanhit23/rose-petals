import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';

import formatterPrice from 'src/helpers/formatPrice';
import { PATH_PUBLIC } from 'src/routes/paths';

import ModalDelete from '../../ModalDelete';
import { ProductCart } from '../types';
import styles from './styles';

type Props = {
  data: ProductCart;
  onDeleteProduct: (id: string) => void;
};

function Product({ data, onDeleteProduct }: Props) {
  const [quantity, setQuantity] = React.useState(data.quantity);
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);

  const handleDelete = () => onDeleteProduct(data._id);

  const handleIncrement = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <>
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
        <ButtonBase onClick={() => setModalDeleteProduct(true)} sx={styles.buttonBaseClose}>
          <CloseIcon />
        </ButtonBase>
      </Box>
      <ModalDelete
        content="Delete this product"
        openModal={modalDeleteProduct}
        handleCloseModal={() => setModalDeleteProduct(false)}
        onDelete={() => handleDelete()}
      />
    </>
  );
}

export default Product;
