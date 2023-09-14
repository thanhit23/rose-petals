import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import LoadingScreen from 'src/components/LoadingScreen';
import LoadingIndicator from 'src/containers/LoadingIndicator';
import routes from 'src/routes';
import store from 'src/store';

import { getCategoryAction } from './actions';
import { categoryLists } from './service';
import './style.css';

function App() {
  useQuery({
    queryKey: ['getCategory'],
    queryFn: () => categoryLists(),
    retry: 0,
    onSuccess: ({ data: { data, status } }) => status && store.dispatch(getCategoryAction(data)),
  });
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LoadingIndicator />
      <RouterProvider router={routes} fallbackElement={<LoadingScreen />} />
    </Suspense>
  );
}

export default App;
