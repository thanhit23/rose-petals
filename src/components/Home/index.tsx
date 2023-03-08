import React from 'react';

import Header from '../Header';
import TopBar from '../TopBar';
import NavBar from '../NavBar';

export default function SignUp() {
  return (
    <>
      <TopBar />
      <Header />
      <div className="section-after-sticky">
        <NavBar />
      </div>
    </>
  );
}
