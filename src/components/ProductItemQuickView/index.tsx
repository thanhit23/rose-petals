import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Rating from '@mui/material/Rating';

import formatPrice from 'src/helpers/formatPrice';

import QuickView from '../QuickView';
import messages from './messages';
import styles from './styles';
import { ItemSellTypes } from './types';

function ProductItemQuickView({
  thumbnail,
  category,
  name,
  slug,
  price,
  review,
  star,
  widthHeightImg = null,
}: ItemSellTypes) {
  const [loved, setLoved] = useState(false);
  const [ModalProductDetail, setModalProductDetail] = useState(false);

  const openModalProduct = () => setModalProductDetail(true);
  const handleCloseModal = () => setModalProductDetail(false);

  return (
    <Box position="unset">
      <Box width="calc(100% - 1.125rem)" margin="auto">
        <Box sx={styles.boxWrapperProduct}>
          <Link to={`/product/${slug}`}>
            <Box
              sx={() => {
                if (widthHeightImg) {
                  return { ...styles.boxComponentImg, height: widthHeightImg };
                }
                return styles.boxWrapperItem;
              }}
            >
              <Box>
                <Box
                  className="img-product"
                  component="img"
                  sx={() => {
                    if (widthHeightImg) {
                      return { ...styles.boxComponentImg, width: widthHeightImg, height: widthHeightImg };
                    }
                    return styles.boxComponentImg;
                  }}
                  alt=""
                  src={thumbnail}
                />
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
          <QuickView openModal={ModalProductDetail} handleCloseModal={handleCloseModal} />
        </Box>
        <Box padding="8px" textAlign="center">
          <Box component="small" sx={styles.boxCategory}>
            {category}
          </Box>
          <Box sx={styles.boxproductNameBox}>
            <Box component="p" sx={styles.boxProductName}>
              {name}
            </Box>
          </Box>
          <Box component="h4" sx={styles.boxPrice}>
            {formatPrice.format(price)}
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

export default ProductItemQuickView;
