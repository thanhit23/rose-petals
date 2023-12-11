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
        <Box sx={styles.wrapRating}>
          <Box component="h6" sx={styles.quantityRating}>
            {product?.rating?.toFixed(1)}
          </Box>
          <Rating name="read-only" value={Number(product?.rating)} readOnly sx={styles.rating} />
        </Box>
        <Box sx={styles.boxRatings}>
          <Box sx={{ borderBottom: '1px solid #333', fontWeight: 'bold', fontSize: '16px', paddingLeft: '3px' }}>
            {product?.totalComment}
          </Box>
          <Box sx={{ color: '#666666' }}>Ratings</Box>
        </Box>
        <Box sx={styles.boxSold}>
          <Box sx={{ borderBottom: '1px solid #333', fontWeight: 'bold', fontSize: '16px', paddingLeft: '3px' }}>
            {product?.sold}
          </Box>
          <Box sx={{ color: '#666666' }}>Sold</Box>
        </Box>
      </Box>
      {product?.size && product?.size.length !== 0 && (
        <Box marginBottom="16px">
          <Box component="h6" sx={styles.boxType}>
            Size
          </Box>
          <Box>
            {product.size.map((item, index) => (
              <Chip
                label={item}
                key={index}
                onClick={() => setColorType(prev => ({ ...prev, sizes: item }))}
                sx={{
                  ...styles.typeItem,
                  backgroundColor: handleChangeColor(colorType.sizes === item),
                  color: handleChangeColor(colorType.sizes === item, '#fff', '#000000de'),
                  '&:hover': {
                    backgroundColor: () => (colorType.sizes === item ? '#E3364E' : '#0000001f'),
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
      >
        <FormattedMessage {...messages.btnAddCart} />
      </LoadingButton>
    </Grid>
  );
};

export default ProductForm;
