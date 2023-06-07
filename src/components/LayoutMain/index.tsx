import React from 'react';

import Header from '../Header';
import TopBar from '../TopBar';
import NavBar from '../NavBar';
import Footer from '../Footer';
import NavigateBar from '../NavigateBar';
import { LayoutMainType } from './types';
import useResponsive from '../../hook/useResponsive';

export default function LayoutMain({ children }: LayoutMainType) {
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      <TopBar />
      <Header />
      <div className="section-after-sticky">
        <NavBar />
        {children}
      </div>
      {!isDesktop && <NavigateBar />}
      <Footer />
    </>
  );
}
