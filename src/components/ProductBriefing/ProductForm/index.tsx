import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { AddToCartProduct, Product } from 'src/common/types';
import QuantityButton from 'src/components/QuantityButton';
import formatterPrice from 'src/helpers/formatPrice';
import { useAddToCart } from 'src/queries/cart';

import { PATH_AUTH } from '../../../routes/paths';
import store from '../../../store';
import messages from '../messages';
import styles from '../styles';
import { InitialState, TData } from './types';

type Props = {
  product?: Product;
};

const initialState: InitialState = {
  sizes: '',
  colors: '',
};

const sizes = [{ label: 'M' }, { label: 'L' }, { label: 'XL' }];

const colors = [{ label: 'Blue' }, { label: 'Red' }, { label: 'Green' }];

const ProductForm: React.FC<Props> = ({ product }) => {
  const {
    global: { auth },
  } = store.getState();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const [colorType, setColorType] = useState<InitialState>(initialState);

  const [quantity, setQuantity] = useState<number>(1);

  const handleChangeColor = (condition: boolean, colorDefault?: string, colorActive?: string) =>
    condition ? colorDefault || '#D23F57' : colorActive || '#00000014';

  const addProductToCart = useAddToCart({
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: ['getProductCartList'],
      });
    },
  });

  const handleAddToCart = (data: AddToCartProduct) => {
    addProductToCart.mutate(data, {
      onSuccess: ({ data: { status } }: TData) => {
        if (status) {
          toast.success(<FormattedMessage {...messages.addToCartMessage} />);
        }
      },
    });
  };

  const handleSubmit = () => {
    if (isEmpty(auth)) {
      navigate(PATH_AUTH.login);
      return;
    }

    handleAddToCart({
      productId: product?._id ?? '',
      quantity,
      size: colorType.sizes,
      color: colorType.colors,
    });
  };

  return (
    <Grid item xs={12} md={6} sx={{ maxWidth: { sm: '100%' } }}>
      <Box component="h1" sx={styles.boxTitle}>
        {product?.name}
      </Box>
      <Box sx={styles.boxWrapBrand}>
        <Box sx={{ marginRight: 1 }}>Brand:</Box>
        <Box component="h6" sx={styles.boxBrand}>
          {product?.brand.name}
        </Box>
      </Box>
      <Box sx={styles.boxRated}>
        <Box lineHeight={1}>Rated:</Box>
        <Box sx={styles.wrapRating}>
          <Rating name="read-only" value={Number(product?.rating)} readOnly sx={styles.rating} />
        </Box>
        <Box component="h6" sx={styles.quantityRating}>
          (50)
        </Box>
      </Box>
      {product?.size && product?.size.length !== 0 && (
        <Box marginBottom="16px">
          <Box component="h6" sx={styles.boxType}>
            Size
          </Box>
          <Box>
            {sizes.map(({ label }, index) => (
              <Chip
                label={label}
                key={index}
                onClick={() => setColorType(prev => ({ ...prev, sizes: label }))}
                sx={{
                  ...styles.typeItem,
                  backgroundColor: handleChangeColor(colorType.sizes === label),
                  color: handleChangeColor(colorType.sizes === label, '#fff', '#000000de'),
                  '&:hover': {
                    backgroundColor: () => (colorType.sizes === label ? '#E3364E' : '#0000001f'),
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      )}
      <Box sx={styles.wrapPrice}>
        <Box component="h2" sx={styles.boxPrice}>
          {formatterPrice.format(product?.price || 0)}
        </Box>
        <QuantityButton quantity={quantity} setQuantity={setQuantity} />
      </Box>

      <LoadingButton
        loading={addProductToCart.isLoading}
        variant="contained"
        sx={styles.btnAddCart}
        onClick={handleSubmit}
        disabled={product?.quantity === product?.sold}
      >
        <FormattedMessage {...messages.btnAddCart} />
      </LoadingButton>
    </Grid>
  );
};

export default ProductForm;
