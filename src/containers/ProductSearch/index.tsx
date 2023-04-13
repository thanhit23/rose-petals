import React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import SortBar from '../../components/SortBar';
import LayoutMain from '../../components/LayoutMain';
import FilterPanel from '../../components/FilterPanel';
import SearchResults from '../../components/SearchResults';
import styles from '../../components/SearchResults/styles';
import Box from '@mui/material/Box';
import Pagination from '../../components/Pagination';

function ProductSearch() {
  const handleProductSearch = () => {
    console.log('asdasdasd');
  };
  return (
    <LayoutMain>
      <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
        <SortBar />
        <Grid container spacing={{ xs: 3 }}>
          <FilterPanel />
          <Grid item xs={12} md={9}>
            <Grid container spacing={{ xs: 3 }}>
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
              <SearchResults product={{}} />
            </Grid>
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
