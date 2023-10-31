import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';

import FilterPanel from 'src/components/FilterPanel';
import Pagination from 'src/components/Pagination';
import ProductItem from 'src/components/ProductItem';
import styles from 'src/components/ProductItem/styles';
import ProductViewInList from 'src/components/ProductViewInList';
import SortBar from 'src/components/SortBar';
import { products } from 'src/mockData';

import { getBrands } from '../HomePage/httpClients';
import { getFilterProducts } from './services';

function ProductSearch() {
  const [viewList, setViewList] = useState(false);

  const { data: listBrand = [] } = useQuery({
    queryKey: ['getBrands'],
    queryFn: () => getBrands(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  useQuery({
    queryKey: ['getFilterProducts'],
    queryFn: () => getFilterProducts(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const handleProductSearch = () => {
    // eslint-disable-next-line no-console
    console.log('asdasdasd');
  };

  const handleChangeView = (isView: boolean) => setViewList(isView);

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
        {products.map(product => (
          <ProductItem key={product._id} product={product} />
        ))}
      </Grid>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <SortBar changeView={handleChangeView} viewList={viewList} />
      <Grid container spacing={{ xs: 3 }}>
        <FilterPanel listBrand={listBrand} />
        <Grid item xs={12} md={9}>
          {renderProduct()}
          <Box sx={styles.boxQuantityPaginationProduct}>
            <Box component="span">Showing 1-9 of 1.3k Products</Box>
            <Pagination count={10} onChange={handleProductSearch} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export const Component = ProductSearch;
