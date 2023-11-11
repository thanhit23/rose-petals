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

import {
  getBestSellingProducts,
  getBrands,
  getFeaturedProducts,
  getLinkCategories,
  getNewTopProduct,
  getWeekTopProduct,
} from './httpClients';

function Home() {
  const { data: listBrand = [] } = useQuery({
    queryKey: ['getBrands'],
    queryFn: () => getBrands(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: productBestTheWeek = [] } = useQuery({
    queryKey: ['getWeekTopProduct'],
    queryFn: () => getWeekTopProduct(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: productLatest = [] } = useQuery({
    queryKey: ['getNewTopProduct'],
    queryFn: () => getNewTopProduct(),
    retry: 0,
    select: ({ data: { data } }) => data,
  });

  const { data: listFeatureProduct = [] } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: () => getFeaturedProducts(),
    select: ({ data: { data } }) => data,
  });

  const { data: bestSellingProduct = [] } = useQuery({
    queryKey: ['bestSellingProducts'],
    queryFn: () => getBestSellingProducts(),
    select: ({ data: { data } }) => data,
  });

  return (
    <Box bgcolor="#fff">
      <SlideShow />
      <Service />
      <BestSellingCategories />
      <BestSellingProducts products={bestSellingProduct} />
      <Event />
      <FeaturedProducts listFeatureProduct={listFeatureProduct} />
      <EventNotificationBanner />
      <LatestArticles />
      <ListBrand listBrand={listBrand} />
      <MultipleOptionProduct productBestTheWeek={productBestTheWeek} productLatest={productLatest} />
    </Box>
  );
}

export const Component = Home;
