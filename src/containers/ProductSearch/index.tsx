import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Paper, Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useQuery } from '@tanstack/react-query';

import { Product } from 'src/common/types';
import FilterPanel from 'src/components/FilterPanel';
import Pagination from 'src/components/Pagination';
import ProductItem from 'src/components/ProductItem';
import styles from 'src/components/ProductItem/styles';
import ProductViewInList from 'src/components/ProductViewInList';
import SortBar from 'src/components/SortBar';
import useDebounce from 'src/hooks/useDebounce';
import usePagination from 'src/hooks/usePagination';

import { getBrands } from '../HomePage/httpClients';
import { getFilterProducts } from './services';

function ProductSearch() {
  const [viewList, setViewList] = useState(false);
  const [price, setPrice] = useState({ price_min: 0, price_max: 0 });
  const [rating, setRating] = useState({ rating_min: 0, rating_max: 0 });
  const [brand, setBrand] = useState<string | null>(null);
  const [numberProduct, setNumberProduct] = useState(0);
  const [isShow, setIsShow] = useState(true);
  const priceDebounce = useDebounce(price, 700);
  const ratingDebounce = useDebounce(rating, 700);
  const brandDebounce = useDebounce(brand, 700);
  const isShowDebounce = useDebounce(isShow, 700);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');

  const { data: listBrand = [] } = useQuery({
    queryKey: ['getBrands'],
    queryFn: () => getBrands(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: listFilterProduct = [], isFetching } = useQuery({
    queryKey: ['getFilterProducts', priceDebounce, ratingDebounce, brandDebounce, categoryId],
    queryFn: () => getFilterProducts({ ...price, ...rating, brand: brand ?? null, category: categoryId ?? null }),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const handleProductSearch = (p: number) => {
    showListFilterProduct.jump(p);
  };

  useEffect(() => {
    handleProductSearch(1);
    setNumberProduct(listFilterProduct?.length);
    if (listFilterProduct?.length > 0) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  }, [listFilterProduct]);

  const handleChangeView = (isView: boolean) => setViewList(isView);
  const PER_PAGE = 9;
  const count = Math.ceil(numberProduct / PER_PAGE);
  const showListFilterProduct = usePagination(listFilterProduct, PER_PAGE);
  const renderProduct = () => {
    if (viewList) {
      return (
        <Box>
          <ProductViewInList showListFilterProduct={showListFilterProduct} isFetching={isFetching} />
        </Box>
      );
    }
    return (
      <Grid container spacing={{ xs: 3 }}>
        {!isFetching ? (
          showListFilterProduct.map((item: Product) => <ProductItem product={item} key={item.name} />)
        ) : (
          <>
            {(() => {
              const skeletons = [];
              for (let i = 0; i < 6; i++) {
                skeletons.push(
                  <Grid item xs={12} sm={6} lg={4} key={i}>
                    <Paper>
                      <Box height={412}>
                        <Skeleton variant="rectangular" height={290} />
                        <Skeleton sx={{ mt: 1.6, mx: 1.5, py: 0.3 }} width="90%" />
                        <Skeleton sx={{ mt: 0.3, mx: 1.5, py: 0.3 }} width="35%" />
                        <Skeleton sx={{ mt: 0.3, mx: 1.5, py: 0.3 }} width="20%" />
                      </Box>
                    </Paper>
                  </Grid>,
                );
              }
              return skeletons;
            })()}
          </>
        )}
      </Grid>
    );
  };

  return (
    <Container maxWidth="lg" sx={{ margin: '32px auto' }}>
      <SortBar numberProduct={numberProduct} changeView={handleChangeView} viewList={viewList} />
      <Grid container spacing={{ xs: 3 }}>
        <FilterPanel setPrice={setPrice} setRating={setRating} setBrand={setBrand} listBrand={listBrand} />
        <Grid item xs={12} md={9}>
          {isShowDebounce == true ? (
            renderProduct()
          ) : (
            <Box display="flex" justifyContent="center" sx={{ marginTop: '30px' }}>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/sorry-item-not-found-3328225-2809510.png?f=webp"
                alt=""
                width="60%"
              />
            </Box>
          )}
          <Box sx={styles.boxQuantityPaginationProduct}>
            <Box component="span">Showing {numberProduct} of 0 Products</Box>
            {numberProduct > 9 && <Pagination page={1} count={count} onChange={handleProductSearch} />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = ProductSearch;
