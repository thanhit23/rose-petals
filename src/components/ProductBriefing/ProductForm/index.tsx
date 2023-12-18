import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FormattedMessage } from 'react-intl';

import LoadingButton from '@mui/lab/LoadingButton';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { useQueryClient } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import { AddToCartProduct, Product } from 'src/common/types';
import QuantityButton from 'src/components/QuantityButton';
import LoginForm from 'src/containers/Login/LoginForm';
import formatterPrice from 'src/helpers/formatPrice';
import { useAddToCart } from 'src/queries/cart';

import store from '../../../store';
import messages from '../messages';
import styles from '../styles';
import { InitialState, TData } from './types';

type Props = {
  product?: Product;
};

const initialState: InitialState = {
  sizes: '',
};

const ProductForm: React.FC<Props> = ({ product }) => {
  const {
    global: { auth },
  } = store.getState();

  const queryClient = useQueryClient();

  const [optionType, setOptionType] = useState<InitialState>(initialState);
  const [quantity, setQuantity] = useState<number>(1);
  const [isErrorChooseSize, setIsErrorChooseSize] = useState<boolean>(false);
  const [openModalLogin, setOpenModalLogin] = useState<boolean>(false);

  const handleClose = () => setOpenModalLogin(false);

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
        } else {
          toast.error(<FormattedMessage {...messages.addToCartErrorMessage} />);
        }
      },
    });
  };

  const handleSubmit = () => {
    if (!isEmpty(product?.size)) {
      if (!optionType.sizes) {
        setIsErrorChooseSize(true);
        return;
      }
    }

    if (isEmpty(auth)) {
      setOpenModalLogin(true);
      return;
    }

    handleAddToCart({
      productId: product?._id ?? '',
      quantity,
      size: [optionType.sizes],
    });
  };

  return (
    <React.Fragment>
      <Grid item xs={12} md={6} sx={{ maxWidth: { sm: '100%' } }}>
        <Box component="h1" sx={styles.boxTitle}>
          {product?.name}
        </Box>

        <Box sx={styles.boxWrapBrand}>
          <Box sx={{ marginRight: 1 }}>
            <FormattedMessage {...messages.brand} />:
          </Box>
          <Box component="h6" sx={styles.boxBrand}>
            {product?.brand.name}
          </Box>
        </Box>

        <Box sx={styles.boxRated}>
          <Box lineHeight={1}>
            <FormattedMessage {...messages.rated} />:
          </Box>
          <Box sx={styles.wrapRating}>
            <Box component="h6" sx={styles.quantityRating}>
              {product?.rating?.toFixed(1)}
            </Box>
            <Rating name="read-only" precision={0.1} value={Number(product?.rating)} readOnly sx={styles.rating} />
          </Box>
          <Box sx={styles.boxRatings}>
            <Box sx={styles.ratingAndSold}>{product?.totalComment || 0}</Box>
            <Box sx={styles.ratingAndSoldLabel}>
              <FormattedMessage {...messages.ratings} />
            </Box>
          </Box>
          <Box sx={styles.boxSold}>
            <Box sx={styles.ratingAndSold}>{product?.sold || 0}</Box>
            <Box sx={styles.ratingAndSoldLabel}>
              <FormattedMessage {...messages.sold} />
            </Box>
          </Box>
        </Box>

        <Box sx={styles.wrapPrice}>
          <Box component="h2" sx={styles.boxPrice}>
            {formatterPrice.format(product?.price || 0)}
          </Box>
        </Box>

        <Box style={{ ...styles.boxSizeQuantity, backgroundColor: isErrorChooseSize ? '#fff5f5' : '' }}>
          {!isEmpty(product?.size) && (
            <Box style={styles.boxChooseSize}>
              <Box component="h6" sx={styles.boxType} style={{ minWidth: '100px' }}>
                <FormattedMessage {...messages.size} />
              </Box>
              <Box>
                {product?.size?.map((label, index) => (
                  <Chip
                    label={label}
                    key={index}
                    onClick={() => {
                      setOptionType(prev => ({ ...prev, sizes: label }));
                      setIsErrorChooseSize(false);
                    }}
                    sx={{
                      ...styles.typeItem,
                      backgroundColor: handleChangeColor(optionType.sizes === label),
                      color: handleChangeColor(optionType.sizes === label, '#fff', '#000000de'),
                      '&:hover': {
                        backgroundColor: () => (optionType.sizes === label ? '#E3364E' : '#0000001f'),
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}
          <Box style={styles.wrapQuantity}>
            <Box component="h6" sx={styles.boxType} style={{ minWidth: '100px' }}>
              <FormattedMessage {...messages.quantity} />
            </Box>
            <QuantityButton sx={styles.boxQuantity} quantity={quantity} setQuantity={setQuantity} />
            <Box component="span" color="#757575" paddingLeft="20px">
              {product?.quantity || 0} <FormattedMessage {...messages.quantityProductMessage} />
            </Box>
          </Box>
          {isErrorChooseSize && (
            <Box component={'p'} style={styles.boxShowError}>
              <FormattedMessage {...messages.pleaseChooseSize} />
            </Box>
          )}
        </Box>

        <Box sx={styles.boxItemInAddCart}>
          <LoadingButton
            disabled={product?.quantity === product?.sold}
            loading={addProductToCart.isLoading}
            variant="contained"
            sx={styles.btnAddCart}
            onClick={handleSubmit}
          >
            <FormattedMessage {...messages.btnAddCart} />
          </LoadingButton>
        </Box>

        {product?.quantity === product?.sold && (
          <Box component={'p'} style={styles.boxShowErrorSoldOut}>
            <FormattedMessage {...messages.soldOutProductMessage} />
          </Box>
        )}
      </Grid>
      <Dialog
        open={openModalLogin}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        sx={styles.dialog}
      >
        <Paper elevation={3} sx={styles.paperLogin}>
          <LoginForm onCloseDialog={handleClose} />
        </Paper>
      </Dialog>
    </React.Fragment>
  );
};

export default ProductForm;
