import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import { Product } from 'src/common/types';
import QuickView from 'src/components/QuickView';
import { formatPrice } from 'src/helpers';
import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';

type Props = {
  productRelate: Product;
};

const ProductItem: React.FC<Props> = ({ productRelate }) => {
  const [modalRelatedProduct, setModalRelatedProduct] = useState(false);

  const handleOpenModal = () => setModalRelatedProduct(true);
  const handleCloseModal = () => setModalRelatedProduct(false);

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper sx={styles.paperProduct}>
        <Box sx={styles.boxImage}>
          <Box sx={styles.boxIcon} className="box--icon">
            <IconButton aria-label="delete" size="medium" sx={styles.icon} onClick={handleOpenModal}>
              <VisibilityIcon fontSize="small" />
            </IconButton>
            <QuickView product={productRelate} openModal={modalRelatedProduct} handleCloseModal={handleCloseModal} />
          </Box>
          <Link to={PATH_PUBLIC.product.slug(productRelate?.slug, productRelate?._id)}>
            <Box component="img" src={productRelate.thumbnail} alt={productRelate.name} sx={styles.imageProduct} />
          </Link>
        </Box>
        <Box padding="1rem" width="100%">
          <Box display="flex">
            <Box sx={styles.informationProduct}>
              <Link to={PATH_PUBLIC.product.slug(productRelate?.slug, productRelate?._id)}>
                <Box component="h3" sx={styles.nameProduct}>
                  {productRelate.name}
                </Box>
              </Link>
              <Rating
                name="read-only"
                precision={0.1}
                value={Number(productRelate.rating)}
                readOnly
                sx={{ fontSize: '1.25rem' }}
              />
              <Box sx={styles.priceProduct}>
                <Box fontWeight={600} color="#D23F57">
                  {formatPrice.format(productRelate.price)}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ProductItem;
