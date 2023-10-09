import Box from '@mui/material/Box';
import { useQuery } from '@tanstack/react-query';

import BestSellingCategories from 'src/components/BestSellingCategories';
import BestSellingProducts from 'src/components/BestSellingProducts';
import Event from 'src/components/Event';
import EventNotificationBanner from 'src/components/EventNotificationBanner';
import FeaturedProducts from 'src/components/FeaturedProducts';
import LatestArticles from 'src/components/LatestArticles';
import ListBrand from 'src/components/ListBrand';
import MultipleOptionProduct from 'src/components/MultipleOptionProduct';
import Service from 'src/components/Service';
import SlideShow from 'src/components/Slide';
import { getMe as getMeAction } from 'src/containers/Authenticated/actions';
import store from 'src/store';

import { getBrands, getFeaturedProducts, getMe, setBearerToken } from './httpClients';

function Home() {
  useQuery({
    queryKey: ['getMe'],
    queryFn: () => {
      const token: string = localStorage.getItem('accessToken') || '';
      setBearerToken(token);
      return getMe();
    },
    retry: 0,
    onSuccess: ({ data: { data, status } }) => status && store.dispatch(getMeAction(data)),
  });

  const { data: listBrand = [] } = useQuery({
    queryKey: ['getBrands'],
    queryFn: () => getBrands(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: listFeatureProduct = [] } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: () => getFeaturedProducts(),
    select: ({ data: { data } }) => data,
  });

  return (
    <Box bgcolor="#fff">
      <SlideShow />
      <Service />
      <BestSellingCategories />
      <BestSellingProducts />
      <Event />
      <FeaturedProducts listFeatureProduct={listFeatureProduct} />
      <EventNotificationBanner />
      <LatestArticles />
      <ListBrand listBrand={listBrand} />
      <MultipleOptionProduct />
    </Box>
  );
}

export const Component = Home;
