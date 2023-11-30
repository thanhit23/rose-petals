import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UseMutationResult } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import _ from 'lodash';

import { OrderDetailProduct } from 'src/containers/Order/types';
import { formatPrice } from 'src/helpers';
import { PATH_PUBLIC } from 'src/routes/paths';

import ReviewProductQuickView from '../ReviewProductQuickView';
import messages from '../messages';
import styles from './styles';

type Props = {
  product: OrderDetailProduct;
  onReviewProduct: UseMutationResult<AxiosResponse<any, any>, unknown, object, unknown>;
};

const ProductItem: React.FC<Props> = ({ product, onReviewProduct }) => {
  const [openModalReview, setOpenModalReview] = useState(false);
  const handleCloseModal = () => setOpenModalReview(false);

  return (
    <Box sx={styles.wrapperProduct}>
      <Box sx={styles.boxImageProduct}>
        <Box component={Link} to={PATH_PUBLIC.product.slug(product.product.slug, product.product._id)}>
          <Avatar alt={product.product.name} src={product.product.thumbnail} sx={styles.avatarProduct} />
        </Box>
        <Box marginLeft="20px">
          <Box
            component={Link}
            to={PATH_PUBLIC.product.slug(product.product.slug, product.product._id)}
            sx={styles.nameProduct}
          >
            {product.product.name}
          </Box>
          <Typography sx={styles.priceProduct}>
            {formatPrice.format(product.price)} x {product.quantity}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.boxDescriptionProduct}>
        {!_.isEmpty(product.product.size) && (
          <Typography sx={styles.descriptionProduct}>
            <FormattedMessage {...messages.productProperties} /> {product.product.size.join(', ')}
          </Typography>
        )}
      </Box>
      <Box sx={styles.boxWriteReview}>
        <Button variant="text" sx={styles.btnWriteReview} onClick={() => setOpenModalReview(true)}>
          <Typography sx={styles.typographyWriteReview}>
            <FormattedMessage {...messages.btnWriteReview} />
          </Typography>
        </Button>
        <ReviewProductQuickView
          product={product}
          openModal={openModalReview}
          handleCloseModal={handleCloseModal}
          onReviewProduct={onReviewProduct}
        />
      </Box>
    </Box>
  );
};

export default ProductItem;
