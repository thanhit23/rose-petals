import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import { formatPrice } from 'src/helpers';

import styles from './styles';

type Props = {
  item: {
    srcImg?: string;
    thumbnail?: string;
    name: string;
    price: number;
    star: number;
  };
};

const ProductItem: React.FC<Props> = ({ item }) => {
  const [value, setValue] = useState(item?.star);

  return (
    <Box sx={styles.boxProduct}>
      <Link to="#">
        <Box sx={styles.boxImg}>
          <Box component="img" src={item?.srcImg} sx={styles.img} className="img-product" />
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
            {item?.name}
          </Box>
        </Link>
        <Box component="p" sx={styles.boxPrice}>
          {formatPrice.format(item?.price || 0)}
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
};

export default ProductItem;
