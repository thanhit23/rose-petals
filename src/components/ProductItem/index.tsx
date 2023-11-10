import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { RemoveRedEye } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import { Product } from 'src/common/types';

import QuickView from '../QuickView';
import styles from './styles';

type Props = {
  product: Product;
};

const ProductItem: React.FC<Props> = ({ product }) => {
  const [modalProductDetail, setModalProductDetail] = useState(false);

  const handleOpenModal = () => setModalProductDetail(true);
  const handleCloseModal = () => setModalProductDetail(false);

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper sx={styles.paperProduct}>
        <Box sx={styles.boxImage}>
          <Box className="hover-box" sx={styles.hoverBox}>
            <IconButton aria-label="delete" onClick={handleOpenModal}>
              <RemoveRedEye fontSize="small" sx={styles.colorIcon} />
            </IconButton>
            <QuickView product={product} openModal={modalProductDetail} handleCloseModal={handleCloseModal} />
          </Box>
          <Link to="/">
            <Box
              component="img"
              width="100%"
              src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FAccessories%2F7.PoliceGrayEyeglasses.png&w=3840&q=75"
            />
          </Link>
        </Box>
        <Box p="1rem">
          <Box display="flex">
            <Box sx={styles.wrapContentProduct}>
              <Link to="/">
                <Box className="title" component="h3" sx={styles.boxTitle}>
                  Police Gray Eyeglasses
                </Box>
              </Link>
              <Rating name="read-only" value={4} readOnly sx={{ fontSize: '1.25rem' }} />
              <Box sx={styles.boxPrice}>
                <Box fontWeight={600} color="#D23F57">
                  $187.00
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
