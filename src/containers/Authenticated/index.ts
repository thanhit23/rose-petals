import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useEffect } from 'react';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { sendRequestToken, redirectLogin } from './actions';

interface Props {
  auth: {}
  children: JSX.Element
  onSendRequestToken: (token: string) => void
  notToken: () => void
}

interface States {
  global: { auth: {} }
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

  if (token && auth) return children;
}

const mapStateToProps = (state: States) => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSendRequestToken: bindActionCreators(sendRequestToken, dispatch),
    notToken: bindActionCreators(redirectLogin, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'authenticated', saga });

export default compose(withSaga, withConnect)(Authenticated);
