import React from 'react';
import Box from '@mui/material/Box';

import Event from '../Event';
import SlideShow from '../Slide';
import Service from '../Service';
import ListBrand from '../ListBrand';
import LatestArticles from '../LatestArticles';
import FeaturedProducts from '../FeaturedProducts';
import BestSellingProduct from '../BestSellingProduct';
import BestSellingCategories from '../BestSellingCategories';
import MultipleOptionProduct from '../MultipleOptionProduct';
import EventNotificationBanner from '../EventNotificationBanner';
import LayoutMain from '../LayoutMain';

export default function Home() {
  return (
    <>
      <LayoutMain>
        <Box bgcolor="#fff">
          <SlideShow />
          <Service />
          <BestSellingCategories />
          <BestSellingProduct />
          <Event />
          <FeaturedProducts />
          <EventNotificationBanner />
          <LatestArticles />
          <ListBrand />
          <MultipleOptionProduct />
        </Box>
      </LayoutMain>
    </>
  );
}
