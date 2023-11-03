import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import { useQueryClient } from '@tanstack/react-query';

import formatterPrice from 'src/helpers/formatPrice';
import { useUpdateQuantityProduct } from 'src/queries/cart';
import { PATH_PUBLIC } from 'src/routes/paths';

import ModalDelete from '../../ModalDelete';
import { ProductCart } from '../types';
import styles from './styles';

type Props = {
  data: ProductCart;
  onDeleteProduct: (id: string) => void;
};

function Product({ data, onDeleteProduct }: Props) {
  const [quantity, setQuantity] = useState(data.quantity);
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);

  const handleDelete = () => onDeleteProduct(data._id);

  useEffect(() => {
    setQuantity(data.quantity);
  }, [data.quantity]);

  const queryClient = useQueryClient();

  const updateQuantityProduct = useUpdateQuantityProduct({
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ['getProductCartList'],
      });
    },
  });

  const handleIncrement = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
    updateQuantityProduct.mutate({
      id: data._id,
      quantity: '1',
    });
  };

  const handleDecrement = () => {
    if (quantity === 1) {
      setModalDeleteProduct(true);
      return;
    }

    setQuantity(quantity - 1);
    updateQuantityProduct.mutate({
      id: data._id,
      quantity: '-1',
    });
  };

  return (
    <>
      <Box sx={styles.containerProduct}>
        <Box sx={styles.boxWrapBtnPlusMinus}>
          <Button
            onClick={handleIncrement}
            sx={
              updateQuantityProduct.isLoading ? { ...styles.btnPlusMinus, ...styles.btnDisabled } : styles.btnPlusMinus
            }
          >
            +
          </Button>
          <Box sx={styles.boxCounter}>{quantity}</Box>
          <Button
            onClick={handleDecrement}
            sx={
              updateQuantityProduct.isLoading ? { ...styles.btnPlusMinus, ...styles.btnDisabled } : styles.btnPlusMinus
            }
          >
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
            {formatterPrice.format(data.product.price)} x {quantity}
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
