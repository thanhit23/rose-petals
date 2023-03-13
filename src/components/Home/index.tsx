import React from 'react';
import Box from '@mui/material/Box';

import Event from '../Event';
import Header from '../Header';
import TopBar from '../TopBar';
import NavBar from '../NavBar';
import SlideShow from '../Slide';
import Service from '../Service';
import ListBrand from '../ListBrand';
import LatestArticles from '../LatestArticles';
import FeaturedProducts from '../FeaturedProducts';
import BestSellingProduct from '../BestSellingProduct';
import BestSellingCategories from '../BestSellingCategories';
import MultipleOptionProduct from '../MultipleOptionProduct';
import EventNotificationBanner from '../EventNotificationBanner';
import FooterComponent from '../Footer';

export default function SignUp() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="section-after-sticky">
        <NavBar />
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
      </div>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
