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

import messages from './messages';
import styles from './styles';

function RelatedProducts() {
  const [quantity, setQuantity] = useState(0);

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
      <Box component="h3">
        <FormattedMessage {...messages.title} />
      </Box>
      <Grid container spacing={{ xs: 8 }}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={styles.paperProduct}>
            <Box sx={styles.boxImage}>
              <Chip label="12% off" sx={styles.chipSale} />
              <Box sx={styles.boxIcon} className="box--icon">
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Link to="/">
                <Box
                  component="img"
                  src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F8.ColgateAdvanceProtectionToothpaste.png&w=3840&q=75"
                  sx={styles.imageProduct}
                />
              </Link>
            </Box>
            <Box padding="1rem">
              <Box display="flex">
                <Box sx={styles.informationProduct}>
                  <Link to="/">
                    <Box component="h3" sx={styles.nameProduct}>
                      Colgate Advance Protection Toothpaste
                    </Box>
                  </Link>
                  <Rating name="read-only" value={3} readOnly sx={{ fontSize: '1.25rem' }} />
                  <Box sx={styles.priceProduct}>
                    <Box fontWeight={600} color="#D23F57">
                      $220.00
                    </Box>
                    <Box fontWeight={600} color="#7D879C">
                      <del>$220.00</del>
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={styles.paperProduct}>
            <Box sx={styles.boxImage}>
              <Chip label="12% off" sx={styles.chipSale} />
              <Box sx={styles.boxIcon} className="box--icon">
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Link to="/">
                <Box
                  component="img"
                  src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F8.ColgateAdvanceProtectionToothpaste.png&w=3840&q=75"
                  sx={styles.imageProduct}
                />
              </Link>
            </Box>
            <Box padding="1rem">
              <Box display="flex">
                <Box sx={styles.informationProduct}>
                  <Link to="/">
                    <Box component="h3" sx={styles.nameProduct}>
                      Colgate Advance Protection Toothpaste
                    </Box>
                  </Link>
                  <Rating name="read-only" value={3} readOnly sx={{ fontSize: '1.25rem' }} />
                  <Box sx={styles.priceProduct}>
                    <Box fontWeight={600} color="#D23F57">
                      $220.00
                    </Box>
                    <Box fontWeight={600} color="#7D879C">
                      <del>$220.00</del>
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={styles.paperProduct}>
            <Box sx={styles.boxImage}>
              <Chip label="12% off" sx={styles.chipSale} />
              <Box sx={styles.boxIcon} className="box--icon">
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Link to="/">
                <Box
                  component="img"
                  src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F8.ColgateAdvanceProtectionToothpaste.png&w=3840&q=75"
                  sx={styles.imageProduct}
                />
              </Link>
            </Box>
            <Box padding="1rem">
              <Box display="flex">
                <Box sx={styles.informationProduct}>
                  <Link to="/">
                    <Box component="h3" sx={styles.nameProduct}>
                      Colgate Advance Protection Toothpaste
                    </Box>
                  </Link>
                  <Rating name="read-only" value={3} readOnly sx={{ fontSize: '1.25rem' }} />
                  <Box sx={styles.priceProduct}>
                    <Box fontWeight={600} color="#D23F57">
                      $220.00
                    </Box>
                    <Box fontWeight={600} color="#7D879C">
                      <del>$220.00</del>
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
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={styles.paperProduct}>
            <Box sx={styles.boxImage}>
              <Chip label="12% off" sx={styles.chipSale} />
              <Box sx={styles.boxIcon} className="box--icon">
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <VisibilityIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="medium" sx={styles.icon}>
                  <FavoriteIcon fontSize="small" />
                </IconButton>
              </Box>
              <Link to="/">
                <Box
                  component="img"
                  src="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FGroceries%2F8.ColgateAdvanceProtectionToothpaste.png&w=3840&q=75"
                  sx={styles.imageProduct}
                />
              </Link>
            </Box>
            <Box padding="1rem">
              <Box display="flex">
                <Box sx={styles.informationProduct}>
                  <Link to="/">
                    <Box component="h3" sx={styles.nameProduct}>
                      Colgate Advance Protection Toothpaste
                    </Box>
                  </Link>
                  <Rating name="read-only" value={3} readOnly sx={{ fontSize: '1.25rem' }} />
                  <Box sx={styles.priceProduct}>
                    <Box fontWeight={600} color="#D23F57">
                      $220.00
                    </Box>
                    <Box fontWeight={600} color="#7D879C">
                      <del>$220.00</del>
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
      </Grid>
    </Box>
  );
}

export default RelatedProducts;
