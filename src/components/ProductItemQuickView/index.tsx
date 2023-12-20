import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Rating from '@mui/material/Rating';

import { Nullable, Product } from 'src/common/types';
import formatPrice from 'src/helpers/formatPrice';
import { PATH_PUBLIC } from 'src/routes/paths';

import QuickView from '../QuickView';
import messages from './messages';
import styles from './styles';

type Props = {
  product: Product;
  widthHeightImg?: Nullable<string>;
};

const ProductItemQuickView: React.FC<Props> = ({ product, widthHeightImg = null }) => {
  const [ModalProductDetail, setModalProductDetail] = useState(false);

  const openModalProduct = () => setModalProductDetail(true);
  const handleCloseModal = () => setModalProductDetail(false);

  const styleImage = () => {
    if (widthHeightImg) {
      return {
        ...styles.boxComponentImg,
        width: {
          xs: '100%',
          sm: '100%',
          md: '100%',
          lg: widthHeightImg,
        },
        height: widthHeightImg,
      };
    }

    return styles.boxComponentImg;
  };

  return (
    <Box position="unset">
      <Box width="calc(100% - 1.125rem)" margin="auto">
        <Box sx={styles.boxWrapperProduct}>
          <Link to={PATH_PUBLIC.product.slug(product?.slug, product?._id)}>
            <Box sx={widthHeightImg ? { ...styles.boxComponentImg, height: widthHeightImg } : styles.boxComponentImg}>
              <Box>
                <Box className="img-product" component="img" sx={styleImage()} alt="" src={product?.thumbnail} />
              </Box>
            </Box>
          </Link>
          <ButtonBase className="product-view-action" sx={styles.btnQuickView} onClick={openModalProduct}>
            <FormattedMessage {...messages.btnQuickView} />
          </ButtonBase>
          <QuickView product={product} openModal={ModalProductDetail} handleCloseModal={handleCloseModal} />
        </Box>
        <Box padding="8px" textAlign="center">
          <Box component="small" sx={styles.boxCategory}>
            {product?.category.name}
          </Box>
          <Box sx={styles.boxProductNameBox}>
            <Link to={PATH_PUBLIC.product.slug(product?.slug, product?._id)}>
              <Box component="p" sx={styles.boxProductName}>
                {product?.name}
              </Box>
            </Link>
          </Box>
          <Box component="h4" sx={styles.boxPrice}>
            {formatPrice.format(product?.price)}
          </Box>
          <Box sx={styles.boxWrapperRatingReview}>
            <Rating name="read-only" precision={0.1} value={product?.rating} readOnly sx={styles.rating} />
            <Box component="small" sx={styles.review}>
              ({product?.totalComment} <FormattedMessage {...messages.review} />)
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItemQuickView;
