import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import injectSaga from '../../utils/injectSaga';
import { sendRequestToken, redirectLogin } from './actions';

interface Props {
  auth: object;
  children: JSX.Element;
  onSendRequestToken: (token: string) => void;
  notToken: () => void;
}

interface States {
  global: { auth: object };
}

function Authenticated({ auth, children, onSendRequestToken, notToken }: Props) {
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      onSendRequestToken(token);
    } else {
      notToken();
    }
  }, []);

  if (token && auth) {
    return children;
  }
}

const mapStateToProps = (state: States) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  onSendRequestToken: bindActionCreators(sendRequestToken, dispatch),
  notToken: bindActionCreators(redirectLogin, dispatch),
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'authenticated', saga });

export default compose(withSaga, withConnect)(Authenticated);
