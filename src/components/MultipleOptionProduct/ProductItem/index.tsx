import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import styles from './styles';
import { ProductItemTypes } from './types';

function ProductItem({ srcImg, name, price, star }: ProductItemTypes) {
  const [value, setValue] = useState(star);

  return (
    <Box sx={styles.boxProduct}>
      <Link to="#">
        <Box sx={styles.boxImg}>
          <Box component="img" src={srcImg} sx={styles.img} className="img-product" />
        </Box>
      </Link>
      <Box sx={styles.boxLinkHover}>
        <Link
          to="#"
          style={{
            position: 'relative',
            transition: 'color 150ms ease-in-out',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Box component="p" sx={styles.boxTitle}>
            {name}
          </Box>
        </Link>
        <Box component="p" sx={styles.boxPrice}>
          ${price}
        </Box>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue as number);
          }}
          sx={styles.rating}
        />
      </Box>
    </Box>
  );
}

export default ProductItem;
