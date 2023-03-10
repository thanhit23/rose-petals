import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import ButtonBase from '@mui/material/ButtonBase';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './styles';
import { ItemSellTypes } from './types';
import messages from './messages';
import ProductDetail from './ProductDetail';

function ProductItem({ thumbnail, category, name, price, review, star }: ItemSellTypes) {
  const [loved, setLoved] = useState(false);
  const [ModalProductDetail, setModalProductDetail] = useState(false);

  const openModalProduct = () => setModalProductDetail(true);
  const handleCloseModal = () => setModalProductDetail(false);

  return (
    <Box position="unset">
      <Box width="calc(100% - 1.125rem)" margin="auto">
        <Box sx={styles.boxWrapperProduct}>
          <Link href="#">
            <Box sx={styles.boxWrapperItem}>
              <Box>
                <Box className="img-product" component="img" sx={styles.boxComponentImg} alt="" src={thumbnail} />
              </Box>
            </Box>
          </Link>
          <ButtonBase className="product-actions" sx={styles.btnAddCart}>
            <AddShoppingCartIcon sx={styles.icon} />
          </ButtonBase>
          <ButtonBase className="product-actions" sx={styles.btnFavorite} onClick={() => setLoved(!loved)}>
            {!loved ? <FavoriteBorderIcon sx={styles.icon} /> : <FavoriteIcon sx={styles.iconFavorite} />}
          </ButtonBase>
          <ButtonBase className="product-view-action" sx={styles.btnQuickView} onClick={openModalProduct}>
            <FormattedMessage {...messages.btnQuickView} />
          </ButtonBase>
          <ProductDetail openModal={ModalProductDetail} handleCloseModal={handleCloseModal} />
        </Box>
        <Box padding="8px" textAlign="center">
          <Box component="small" sx={styles.boxCategory}>
            {category}
          </Box>
          <Box component="p" sx={styles.boxProductName}>
            {name}
          </Box>
          <Box component="h4" sx={styles.boxPrice}>
            ${price}
          </Box>
          <Box sx={styles.boxWrapperRatingReview}>
            <Rating name="read-only" value={star} readOnly sx={styles.rating} />
            <Box component="small" sx={styles.review}>
              ({review} <FormattedMessage {...messages.review} />)
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductItem;
