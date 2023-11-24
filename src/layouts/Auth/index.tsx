import React from 'react';
import { Outlet } from 'react-router-dom';

import HeaderAuth from '../HeaderAuth';

export default function LayoutAuth() {
  return (
    <React.Fragment>
      <HeaderAuth />
      <div className="section-after-sticky" style={{ position: 'relative' }}>
        <Outlet />
      </div>
    </React.Fragment>
  );
}
