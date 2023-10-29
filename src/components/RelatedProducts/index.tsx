import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveIcon from '@mui/icons-material/Remove';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import { Product } from 'src/common/types';
import { PATH_PUBLIC } from 'src/routes/paths';

import QuickView from '../QuickView';
import messages from './messages';
import styles from './styles';

type Props = {
  listRelatedProduct: Product[];
};

const RelatedProducts: React.FC<Props> = ({ listRelatedProduct }) => {
  const [quantity, setQuantity] = useState(0);
  const [modalRelatedProduct, setModalRelatedProduct] = useState(false);

  const handleOpenModal = () => setModalRelatedProduct(true);
  const handleCloseModal = () => setModalRelatedProduct(false);

  const handleIncrease = () => {
    if (quantity === 10) return;
    setQuantity(quantity + 1);
  };

  const handleReduce = () => {
    if (quantity === 0) return;
    setQuantity(quantity - 1);
  };

  return (
    <Box marginBottom="60px">
      <Box component="h3" sx={styles.relatedTitle}>
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={{ xs: 8 }}>
        {listRelatedProduct.map(productRelate => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={productRelate._id}>
            <Paper sx={styles.paperProduct}>
              <Box sx={styles.boxImage}>
                <Box sx={styles.boxIcon} className="box--icon">
                  <IconButton aria-label="delete" size="medium" sx={styles.icon} onClick={handleOpenModal}>
                    <VisibilityIcon fontSize="small" />
                  </IconButton>
                  <QuickView
                    product={productRelate}
                    openModal={modalRelatedProduct}
                    handleCloseModal={handleCloseModal}
                  />
                  <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Link to={PATH_PUBLIC.product.slug(productRelate?.slug, productRelate?._id)}>
                  <Box
                    component="img"
                    src={productRelate.thumbnail}
                    alt={productRelate.name}
                    sx={styles.imageProduct}
                  />
                </Link>
              </Box>
              <Box padding="1rem">
                <Box display="flex">
                  <Box sx={styles.informationProduct}>
                    <Link to={PATH_PUBLIC.product.slug(productRelate?.slug, productRelate?._id)}>
                      <Box component="h3" sx={styles.nameProduct}>
                        {productRelate.name}
                      </Box>
                    </Link>
                    <Rating
                      name="read-only"
                      value={Number(productRelate.rating)}
                      readOnly
                      sx={{ fontSize: '1.25rem' }}
                    />
                    <Box sx={styles.priceProduct}>
                      <Box fontWeight={600} color="#D23F57">
                        {productRelate.price}
                      </Box>
                      <Box fontWeight={600} color="#7D879C">
                        <del>{productRelate.price}</del>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={styles.boxAddToCart}>
                    <Button variant="outlined" sx={styles.btnAddToCart} onClick={handleIncrease}>
                      <AddIcon fontSize="small" />
                    </Button>
                    {quantity ? (
                      <>
                        <Box fontWeight={600} color="rgb(43, 52, 69)">
                          {quantity}
                        </Box>
                        <Button variant="outlined" sx={styles.btnAddToCart} onClick={handleReduce}>
                          <RemoveIcon fontSize="small" />
                        </Button>
                      </>
                    ) : null}
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedProducts;
