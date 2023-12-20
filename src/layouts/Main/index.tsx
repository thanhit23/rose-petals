import { Outlet } from 'react-router-dom';

import ScrollToTop from 'src/components/ScrollToTop';
import useResponsive from 'src/hooks/useResponsive';

import Footer from '../Footer';
import Header from '../Header';
import NavBar from '../NavBar';
import NavigateBar from '../NavigateBar';
import TopBar from '../TopBar';

export default function LayoutMain() {
  const isDesktop = useResponsive('up', 'md');

  return (
    <>
      <ScrollToTop />
      <TopBar />
      <Header />
      <div className="section-after-sticky" style={{ position: 'relative' }}>
        <NavBar />
        <Outlet />
      </div>
      {!isDesktop && <NavigateBar />}
      <Footer />
    </>
  );
}
