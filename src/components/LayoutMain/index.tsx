import React from 'react';

import useResponsive from '../../hooks/useResponsive';
import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';
import NavigateBar from '../NavigateBar';
import TopBar from '../TopBar';
import { LayoutMainType } from './types';

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
