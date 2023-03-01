import React from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '../../routes';
import LoadingIndicator from '../LoadingIndicator';

function App() {
  return (
    <>
      <LoadingIndicator />
      {useRoutes(routes())}
    </>
  );
}

export default App;
