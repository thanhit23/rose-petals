import { useEffect, useState } from 'react';
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

import { getBrands } from '../HomePage/httpClients';
import { getFilterProducts } from './services';

function ProductSearch() {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId');
  const searchValue = searchParams.get('q');
  const isBestSelling = searchParams.get('best_selling');

  const [viewList, setViewList] = useState(false);
  const [price, setPrice] = useState({ price_min: '0', price_max: '500000' });
  const [rating, setRating] = useState({ rating_min: 0, rating_max: 0 });
  const [page, setPage] = useState<number>(1);
  const [brand, setBrand] = useState<string | null>(null);
  const [isShowEmpty, setIsShowEmpty] = useState(false);

  const priceDebounce = useDebounce(price, 700);
  const ratingDebounce = useDebounce(rating, 700);
  const brandDebounce = useDebounce(brand, 700);
  const isShowEmptyDebounce = useDebounce(isShowEmpty, 700);

  const { data: listBrand = [] } = useQuery({
    queryKey: ['getBrands'],
    queryFn: () => getBrands(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: listFilterProduct = {}, isFetching } = useQuery({
    queryKey: [
      'getFilterProducts',
      priceDebounce,
      ratingDebounce,
      brandDebounce,
      categoryId,
      page,
      searchValue,
      isBestSelling,
    ],
    queryFn: () =>
      getFilterProducts({
        page,
        ...price,
        ...rating,
        brand: brand,
        name: searchValue,
        category: categoryId,
        best_selling: Boolean(isBestSelling),
      }),
    retry: 0,
    select: ({ data }) => data,
  });

  const handleProductSearch = (p: number) => {
    setPage(p);
  };

  useEffect(() => {
    setPage(1);
  }, [categoryId, searchValue, isBestSelling, priceDebounce, ratingDebounce, brandDebounce]);

  useEffect(() => {
    if (listFilterProduct.meta) {
      if (listFilterProduct.meta.totalResults != 0) {
        setIsShowEmpty(false);
      } else {
        setIsShowEmpty(true);
      }
    }
  }, [listFilterProduct]);

  const handleChangeView = (isView: boolean) => setViewList(isView);
  const renderProduct = () => {
    if (viewList) {
      return (
        <Box>
          <ProductViewInList showListFilterProduct={listFilterProduct.data} isFetching={isFetching} />
        </Box>
      );
    }
    return (
      <Grid container spacing={{ xs: 3 }}>
        {!isFetching ? (
          listFilterProduct.data.map((item: Product) => <ProductItem product={item} key={item.name} />)
        ) : (
          <>
            {(() => {
              const skeletons = [];
              for (let i = 0; i < 6; i++) {
                skeletons.push(
                  <Grid item xs={12} sm={6} lg={4} key={i}>
                    <Paper>
                      <Box height={412}>
                        <Skeleton variant="rectangular" width={290} height={290} />
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
      <SortBar
        numberProduct={listFilterProduct.meta ? listFilterProduct.meta.totalResults : 0}
        changeView={handleChangeView}
        viewList={viewList}
      />
      <Grid container spacing={{ xs: 3 }}>
        <FilterPanel
          price={price}
          setPrice={setPrice}
          setRating={setRating}
          setBrand={setBrand}
          listBrand={listBrand}
        />
        <Grid item xs={12} md={9}>
          {!isShowEmptyDebounce ? (
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
            <Box component="span">
              Showing {listFilterProduct.data ? listFilterProduct.data.length : 0} of{' '}
              {listFilterProduct.meta ? listFilterProduct.meta.totalResults : 0} Products
            </Box>
            {listFilterProduct.meta && listFilterProduct.meta.totalPages > 1 && (
              <Pagination
                count={listFilterProduct.meta ? listFilterProduct.meta.totalPages : 0}
                page={page}
                onChange={handleProductSearch}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export const Component = ProductSearch;
