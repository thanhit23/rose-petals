import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Add, FavoriteBorder, Remove, RemoveRedEye } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import QuickView from '../QuickView';
import styles from './styles';
import { Props } from './types';

function ProductItem({ product }: Props) {
  const [quantity, setQuantity] = useState(0);
  const [modalProductDetail, setModalProductDetail] = useState(false);

  const handleOpenModal = () => setModalProductDetail(true);
  const handleCloseModal = () => setModalProductDetail(false);

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
            <IconButton aria-label="delete" onClick={handleOpenModal}>
              <RemoveRedEye fontSize="small" sx={styles.colorIcon} />
            </IconButton>
            <QuickView openModal={modalProductDetail} handleCloseModal={handleCloseModal} />
            <IconButton aria-label="delete">
              <FavoriteBorder fontSize="small" sx={styles.colorIcon} />
            </IconButton>
          </Box>
          <Link to="/">
            <Box component="img" width="100%" src={product.thumbnail} />
          </Link>
        </Box>
        <Box p="1rem">
          <Box display="flex">
            <Box sx={styles.wrapContentProduct}>
              <Link to="/">
                <Box className="title" component="h3" sx={styles.boxTitle}>
                  {product.name}
                </Box>
              </Link>
              <Rating name="read-only" value={product.rating} readOnly sx={{ fontSize: '1.25rem' }} />
              <Box sx={styles.boxPrice}>
                <Box fontWeight={600} color="#D23F57">
                  {product.price}
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
