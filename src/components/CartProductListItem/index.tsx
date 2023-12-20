import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { useQueryClient } from '@tanstack/react-query';

import { ProductCart } from 'src/components/SideBarCart/types';
import { formatPrice } from 'src/helpers';
import { useUpdateQuantityProduct } from 'src/queries/cart';
import { PATH_PUBLIC } from 'src/routes/paths';

import ModalDelete from '../ModalDelete';
import styles from './styles';

type Props = {
  productCart: ProductCart;
  onDeleteProduct: (id: string) => void;
};

const CartProductListItem: React.FC<Props> = ({ productCart, onDeleteProduct }) => {
  const [quantity, setQuantity] = useState(productCart.quantity);
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);

  const handleDelete = () => onDeleteProduct(productCart._id);

  useEffect(() => {
    setQuantity(productCart.quantity);
  }, [productCart.quantity]);

  const queryClient = useQueryClient();

  const updateQuantityProduct = useUpdateQuantityProduct({
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ['getProductCartList'],
      });
    },
  });

  const handleIncrease = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
    updateQuantityProduct.mutate({
      id: productCart._id,
      quantity: '1',
    });
  };

  const handleReduce = () => {
    if (quantity === 1) {
      setModalDeleteProduct(true);
      return;
    }

    setQuantity(quantity - 1);
    updateQuantityProduct.mutate({
      id: productCart._id,
      quantity: '-1',
    });
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
      <IconButton aria-label="close" size="small" sx={styles.iconClose} onClick={() => setModalDeleteProduct(true)}>
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
            {formatPrice.format(productCart.product.price)} x {quantity}
          </Box>
          <Box component="span" sx={styles.totalPrice}>
            {formatPrice.format(productCart.product.price * quantity)}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            sx={updateQuantityProduct.isLoading ? { ...styles.btnReduce, ...styles.btnDisabled } : styles.btnReduce}
            onClick={handleReduce}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Box sx={styles.boxQuantity}>{quantity}</Box>
          <Button
            variant="outlined"
            sx={updateQuantityProduct.isLoading ? { ...styles.btnIncrease, ...styles.btnDisabled } : styles.btnIncrease}
            onClick={handleIncrease}
          >
            <AddIcon fontSize="small" />
          </Button>
        </Box>
      </Box>
      <ModalDelete
        content="Delete this product"
        openModal={modalDeleteProduct}
        handleCloseModal={() => setModalDeleteProduct(false)}
        onDelete={() => handleDelete()}
      />
    </Paper>
  );
};

export default CartProductListItem;
