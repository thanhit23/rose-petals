import React from 'react';

import Box from '@mui/material/Box';

import Event from '../../components/Event';
import SlideShow from '../../components/Slide';
import Service from '../../components/Service';
import ListBrand from '../../components/ListBrand';
import LayoutMain from '../../components/LayoutMain';
import LatestArticles from '../../components/LatestArticles';
import FeaturedProducts from '../../components/FeaturedProducts';
import BestSellingProducts from '../../components/BestSellingProducts';
import MultipleOptionProduct from '../../components/MultipleOptionProduct';
import BestSellingCategories from '../../components/BestSellingCategories';
import EventNotificationBanner from '../../components/EventNotificationBanner';

function Home() {
  return (
    <>
      <LayoutMain>
        <Box bgcolor="#fff">
          <SlideShow />
          <Service />
          <BestSellingCategories />
          <BestSellingProducts />
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

export default Home;
