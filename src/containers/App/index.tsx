import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import LoadingScreen from 'src/components/LoadingScreen';
import LoadingIndicator from 'src/containers/LoadingIndicator';
import routes from 'src/routes';
import store from 'src/store';

import { setHeader } from '../Authenticated/httpClients';
import { getCategoryAction, getProductCartAction } from './actions';
import { categoryLists, getProductCartList } from './service';
import './style.css';

function App() {
  const token = localStorage.getItem('accessToken') || '';

  useQuery({
    queryKey: ['getCategory'],
    queryFn: () => categoryLists(),
    retry: 0,
    onSuccess: ({ data: { data, status } }) => status && store.dispatch(getCategoryAction(data)),
  });

  useQuery({
    queryKey: ['getProductCartList', token],
    queryFn: ({ queryKey }) => {
      setHeader(queryKey[1]);
      return getProductCartList();
    },
    onSuccess: ({ data: { data, status } }) => status && store.dispatch(getProductCartAction(data)),
  });
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LoadingIndicator />
      <RouterProvider router={routes} fallbackElement={<LoadingScreen />} />
    </Suspense>
  );
}

export default App;
