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
import useDebounce from 'src/hooks/useDebounce';

import { getBrands } from '../HomePage/httpClients';
import { getFilterProducts } from './services';

function ProductSearch() {
  const [viewList, setViewList] = useState(false);
  const [price, setPrice] = useState({ priceMin: 0, priceMax: 0 });
  const [rating, setRating] = useState({ ratingMin: 0, ratingMax: 0 });
  const [brand, setBrand] = useState('Chanelll');

  const priceDebounce = useDebounce(price, 700);
  const ratingDebounce = useDebounce(rating, 700);
  const { data: listBrand = [] } = useQuery({
    queryKey: ['getBrands'],
    queryFn: () => getBrands(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: listFilterProduct = [] } = useQuery({
    queryKey: ['getFilterProducts', priceDebounce, ratingDebounce],
    queryFn: () => getFilterProducts(price.priceMin, price.priceMax, rating.ratingMin, rating.ratingMax),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const handleProductSearch = () => {
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
        {listFilterProduct &&
          listFilterProduct.map((item: { name: string; price: number; rating: number; thumbnail: string }) => (
            <ProductItem product={item} key={item.name} />
          ))}
      </Grid>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <SortBar changeView={handleChangeView} viewList={viewList} />
      <Grid container spacing={{ xs: 3 }}>
        <FilterPanel setPrice={setPrice} setRating={setRating} listBrand={listBrand} />
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
