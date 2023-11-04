import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';

import messages from './messages';
import styles from './styles';

function ProductViewInList() {
  return (
    <>
      <Paper sx={styles.paper}>
        <Grid container spacing={{ xs: 1 }}>
          <Grid item xs={12} sm={3}>
            <Box sx={styles.wrapImg}>
              <img
                src="https://bazar-react.vercel.app/assets/images/products/Fashion/Accessories/7.PoliceGrayEyeglasses.png"
                alt=""
                width="100%"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Box sx={styles.wrapContent}>
              <Link to="/product/asdasd999888">
                <Box sx={styles.productTitle} component="h5">
                  Police Gray Eyeglasses
                </Box>
              </Link>
              <Rating name="read-only" value={3} readOnly size="medium" />
              <Box sx={styles.wrapProductPrice}>
                <Box component="h5" sx={styles.productPrice}>
                  $187.00
                </Box>
              </Box>
              <Box display="flex">
                <Button variant="contained" sx={styles.btnAddToCart}>
                  <FormattedMessage {...messages.btnAddToCart} />
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default ProductViewInList;
