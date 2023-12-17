import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { Product } from 'src/common/types';
import { formatPrice } from 'src/helpers';
import { PATH_PUBLIC } from 'src/routes/paths';

import styles from './styles';

type Props = {
  item: Product;
};

const ProductItem: React.FC<Props> = ({ item }) => (
  <Box sx={styles.boxProduct}>
    <Link to={PATH_PUBLIC.product.slug(item?.slug, item?._id)}>
      <Box sx={styles.boxImg}>
        <Box component="img" src={item?.thumbnail} sx={styles.img} className="img-product" />
      </Box>
    </Link>
    <Box sx={styles.boxLinkHover}>
      <Link
        to={PATH_PUBLIC.product.slug(item?.slug, item?._id)}
        style={{
          position: 'relative',
          transition: 'color 150ms ease-in-out',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <Box component="p" sx={styles.boxTitle}>
          {item?.name}
        </Box>
      </Link>
      <Box component="p" sx={styles.boxPrice}>
        {formatPrice.format(item?.price || 0)}
      </Box>
      <Rating name="read-only" readOnly precision={0.1} value={item?.rating} sx={styles.rating} />
    </Box>
  </Box>
);

export default ProductItem;
