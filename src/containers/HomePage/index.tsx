import React from 'react';
import loadable from '../../utils/loadable';
import Preloader from '../../components/Preloader'

export default loadable(() => import('./view'), {
  fallback: <Preloader />,
})
