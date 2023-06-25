import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';
import { isEmpty } from 'lodash';
import { compose } from 'redux';

import LoadingScreen from 'src/components/LoadingScreen';

import { isMe, setHeader } from './httpClients';
import { Props, States } from './types';

function Authenticated({ auth, children }: Props) {
  const navigate = useNavigate();

  const token = localStorage.getItem('token') || '';

  const { mutate, isLoading } = useMutation({
    mutationFn: () => {
      setHeader(token);
      return isMe();
    },
    onSuccess: ({ data: { status } }) => {
      !status && navigate('/login');
    },
  });

  useEffect(() => {
    if (token) {
      mutate();
    } else {
      navigate('/login');
    }
  }, []);

  if (token && !isEmpty(auth)) return children;

  if (isLoading && isEmpty(auth)) return <LoadingScreen />;

  return <LoadingScreen />;
}

const mapStateToProps = (state: States) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};
const withConnect = connect(mapStateToProps, null);

export default compose(withConnect)(Authenticated);
