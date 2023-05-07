import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import IconButton from '@mui/material/IconButton';
import { RemoveRedEye, FavoriteBorder, Add, Remove } from '@mui/icons-material';

import styles from './styles';
import { Props } from './types';

function ProductItem({ product }: Props) {
  const [quantity, setQuantity] = useState(0);
  console.log(product);
  const handleReduce = (): void => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  const handleIncrease = (): void => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const renderReduce = () => {
    if (quantity) {
      return (
        <>
          <Box fontWeight={600} color="#2b3445">
            {quantity}
          </Box>
          <Button variant="outlined" sx={styles.btnIcon} onClick={handleReduce}>
            <Remove fontSize="small" />
          </Button>
        </>
      );
    }
  };

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Paper sx={styles.paperProduct}>
        <Box sx={styles.boxImage}>
          <Box className="hover-box" sx={styles.hoverBox}>
            <IconButton aria-label="delete">
              <RemoveRedEye fontSize="small" sx={styles.colorIcon} />
            </IconButton>
            <IconButton aria-label="delete">
              <FavoriteBorder fontSize="small" sx={styles.colorIcon} />
            </IconButton>
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
            <Box sx={styles.boxAddCart}>
              <Button variant="outlined" sx={styles.btnIcon} onClick={handleIncrease}>
                <Add fontSize="small" />
              </Button>
              {renderReduce()}
            </Box>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ProductItem;
