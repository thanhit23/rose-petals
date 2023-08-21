import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';
import { isEmpty } from 'lodash';

import LoadingScreen from 'src/components/LoadingScreen';
import store from 'src/store';

import { getMe as getMeAction } from './actions';
import { isMe, setHeader } from './httpClients';
import { TData } from './types';

function Authenticated() {
  const {
    global: { auth },
  } = store.getState();

  const navigate = useNavigate();

  const token = localStorage.getItem('accessToken') || '';

  const { isLoading } = useQuery({
    queryKey: ['/me', token],
    queryFn: ({ queryKey }) => {
      setHeader(queryKey[1]);
      return isMe();
    },
    onSuccess: ({ data: { status, data } }: TData) => {
      status ? store.dispatch(getMeAction(data)) : navigate('/login');
    },
  });

  useEffect(() => {
    if (!token && !auth) navigate('/login');
  }, [token, auth]);

  if (isLoading && isEmpty(auth)) return <LoadingScreen />;

  return <Outlet />;
}

export default Authenticated;
