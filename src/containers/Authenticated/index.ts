// import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import { States, Props } from './types';
import injectSaga from '../../utils/injectSaga';
import { sendRequestToken, redirectLogin } from './actions';

function Authenticated({ auth, children, onSendRequestToken, notToken }: Props) {
  const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (token) {
  //     onSendRequestToken(token);
  //   } else {
  //     notToken();
  //   }
  // }, []);
  console.log(onSendRequestToken);
  console.log(notToken);
  console.log(token);
  console.log(auth);

  // if (token && auth) return children;
  return children;
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
