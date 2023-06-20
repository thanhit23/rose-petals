import React from 'react';

import Box from '@mui/material/Box';

import BestSellingCategories from 'src/components/BestSellingCategories';
import BestSellingProducts from 'src/components/BestSellingProducts';
import Event from 'src/components/Event';
import EventNotificationBanner from 'src/components/EventNotificationBanner';
import FeaturedProducts from 'src/components/FeaturedProducts';
import LatestArticles from 'src/components/LatestArticles';
import LayoutMain from 'src/components/LayoutMain';
import ListBrand from 'src/components/ListBrand';
import MultipleOptionProduct from 'src/components/MultipleOptionProduct';
import Service from 'src/components/Service';
import SlideShow from 'src/components/Slide';

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
