import { memo } from 'react';
import { connect } from 'react-redux';
import { useMutation } from '@tanstack/react-query';
import { bindActionCreators, compose, Dispatch } from 'redux';

import reducer from '../App/reducer';
import LoginPage from '../../components/Login';
import { login as loginService } from './services';
import { Props, LoginSuccessAction, TData } from './types';
import injectReducer, { TypeDefaultInjectors } from '../../utils/injectReducer';
import { loginSuccess as loginSuccessAction, loginFailed as loginFailedAction } from './actions';

function Login({ onLoginSuccess, onLoginFailed }: Props) {
  const { mutate, isLoading } = useMutation({
    mutationFn: (data: object) => loginService(data),
    onSuccess: ({ data: { status, data, message } }: TData) => {
      if (status) {
        onLoginSuccess(data);
      } else {
        onLoginFailed(message);
      }
    },
  });

  console.log(isLoading, 'isLoading');

  const handleSubmit = (data: object) => mutate(data);

  return <LoginPage onSubmit={handleSubmit} />;
}

const mapDispatchToProps = (dispatch: Dispatch<LoginSuccessAction>) => ({
  onLoginFailed: bindActionCreators(loginFailedAction, dispatch),
  onLoginSuccess: bindActionCreators(loginSuccessAction, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'global', reducer } as TypeDefaultInjectors);

export default compose(withReducer, withConnect, memo)(Login);
