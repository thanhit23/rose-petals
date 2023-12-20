import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import LoadingScreen from 'src/components/LoadingScreen';
import { getMe as getMeAction } from 'src/containers/Authenticated/actions';
import LoadingIndicator from 'src/containers/LoadingIndicator';
import routes from 'src/routes';
import store from 'src/store';

import { State } from '../../common/types';
import { isMe, setHeader } from '../Authenticated/httpClients';
import { AuthType } from '../Authenticated/types';
import { getCategoryAction, getProductCartAction } from './actions';
import { categoryLists, getProductCartList } from './service';
import './style.css';

type Props = {
  auth: AuthType;
};

const App: React.FC<Props> = ({ auth }) => {
  const token = localStorage.getItem('accessToken') || '';

  useQuery({
    queryKey: ['getMe'],
    queryFn: () => {
      setHeader(token);
      return isMe();
    },
    retry: 0,
    onSuccess: ({ data: { data, status } }) => status && store.dispatch(getMeAction(data)),
  });

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
    enabled: !isEmpty(auth),
    onSuccess: ({ data: { data, status } }) => status && store.dispatch(getProductCartAction(data)),
  });

  return (
    <Suspense fallback={<LoadingScreen />}>
      <LoadingIndicator />
      <RouterProvider router={routes} fallbackElement={<LoadingScreen />} />
    </Suspense>
  );
};

const mapStateToProps = ({ global: { auth } }: State) => ({
  auth,
});

const withConnect = connect(mapStateToProps, null);
export default compose(withConnect)(App);
