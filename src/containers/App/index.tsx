import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import LoadingScreen from 'src/components/LoadingScreen';
import LoadingIndicator from 'src/containers/LoadingIndicator';
import routes from 'src/routes';

import './style.css';

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LoadingIndicator />
      {useRoutes(routes())}
    </Suspense>
  );
}

export default App;
