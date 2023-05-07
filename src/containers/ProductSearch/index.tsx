import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import SortBar from '../../components/SortBar';
import Pagination from '../../components/Pagination';
import LayoutMain from '../../components/LayoutMain';
import FilterPanel from '../../components/FilterPanel';
import ProductItem from '../../components/ProductItem';
import styles from '../../components/ProductItem/styles';
import ProductViewInList from '../../components/ProductViewInList';

function ProductSearch() {
  const [viewList, setViewList] = useState(false);
  const handleProductSearch = () => {
    console.log('asdasdasd');
  };

  const renderProduct = () => {
    if (viewList) {
      return (
        <Box>
          <ProductViewInList />
        </Box>
      );
    }

    return (
      <Grid container spacing={{ xs: 3 }}>
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
        <ProductItem product={{}} />
      </Grid>
    );
  };

  const handleChangeView = (isView: boolean) => setViewList(isView);

  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <SortBar changeView={handleChangeView} viewList={viewList} />
        <Grid container spacing={{ xs: 3 }}>
          <FilterPanel />
          <Grid item xs={12} md={9}>
            {renderProduct()}
            <Box sx={styles.boxQuantityPaginationProduct}>
              <Box component="span">Showing 1-9 of 1.3k Products</Box>
              <Pagination count={10} onChange={handleProductSearch} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </LayoutMain>
  );
}

export default ProductSearch;
