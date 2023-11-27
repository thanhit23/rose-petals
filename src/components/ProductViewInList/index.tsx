import { Link } from 'react-router-dom';

import { FavoriteBorder } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';

import { Product } from 'src/common/types';
import formatterPrice from 'src/helpers/formatPrice';

import styles from './styles';

type Props = {
  showListFilterProduct: {
    next: () => void;
    prev: () => void;
    jump: (page: number) => void;
    currentData: () => Product[];
    currentPage: number;
    maxPage: number;
    map: (callback: (item: Product) => JSX.Element) => JSX.Element[];
  };
  isFetching: boolean;
};

function ProductViewInList({ showListFilterProduct, isFetching }: Props) {
  return (
    <>
      {!isFetching ? (
        showListFilterProduct.map(item => (
          <Paper key={item._id} sx={styles.paper}>
            <Grid container spacing={{ xs: 1 }}>
              <Grid item xs={12} sm={3}>
                <Link to="/">
                  <Box sx={styles.wrapImg}>
                    <img src={item.thumbnail} alt="" width="100%" />
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box sx={styles.wrapContent}>
                  <Link to="/">
                    <Box sx={styles.productTitle} component="h5">
                      {item.name}
                    </Box>
                  </Link>
                  <Rating name="read-only" value={item.rating} readOnly size="medium" />
                  <Box sx={styles.wrapProductPrice}>
                    <Box component="h5" sx={styles.productPrice}>
                      {formatterPrice.format(item.price)}
                    </Box>
                  </Box>
                  <Box display="flex" sx={styles.productDescription}>{`${item.description}`}</Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        ))
      ) : (
        <>
          {(() => {
            const skeletons = [];
            for (let i = 0; i < 3; i++) {
              skeletons.push(
                <Paper sx={styles.paper}>
                  <Box>
                    <IconButton sx={styles.btnFavorite}>
                      <FavoriteBorder fontSize="small" />
                    </IconButton>
                  </Box>
                  <Grid container spacing={{ xs: 1 }}>
                    <Grid item xs={12} sx={{ marginTop: '192px' }} sm={3}>
                      <Box sx={styles.productTitle} component="h5">
                        <Skeleton variant="rectangular" width="100%" height="100%" />
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Box sx={styles.wrapContent}>
                        <Box sx={styles.productTitle} component="h5">
                          <Skeleton width="90%" height={30} />
                        </Box>
                        <Skeleton width="20%" height={30} />
                        <Box sx={{ ...styles.wrapProductPrice, marginBottom: '0px' }}>
                          <Skeleton width="10%" height={30} />
                        </Box>
                        <Box sx={{ marginTop: '0px' }} display="flex">
                          <Skeleton width="18%" height={60} />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>,
              );
            }
            return skeletons;
          })()}
        </>
      )}
    </>
  );
}

export default ProductViewInList;
