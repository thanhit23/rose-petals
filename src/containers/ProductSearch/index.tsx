import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import FilterPanel from 'src/components/FilterPanel';
import LayoutMain from 'src/components/LayoutMain';
import Pagination from 'src/components/Pagination';
import ProductItem from 'src/components/ProductItem';
import styles from 'src/components/ProductItem/styles';
import ProductViewInList from 'src/components/ProductViewInList';
import SortBar from 'src/components/SortBar';

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
