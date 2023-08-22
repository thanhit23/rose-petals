import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import LoadingScreen from 'src/components/LoadingScreen';
import LoadingIndicator from 'src/containers/LoadingIndicator';
import routes from 'src/routes';

import './style.css';

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LoadingIndicator />
      <RouterProvider router={routes} fallbackElement={<LoadingScreen />} />
    </Suspense>
  );
}

export default App;
