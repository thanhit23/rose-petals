import React from 'react';
import Box from '@mui/material/Box';

import Header from '../Header';
import TopBar from '../TopBar';
import NavBar from '../NavBar';
import SlideShow from '../Slide';
import Service from '../Service';
import BestSellingCategories from '../BestSellingCategories';
import BestSellingProduct from '../BestSellingProduct';

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
        </Box>
      </div>
    </>
  );
}
