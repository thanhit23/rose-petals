import { LOGIN_SUCCESS, LOGIN_FAILED } from './constants';
import { LoginSuccessAction, LoginFailedAction } from './types';

export const loginSuccess = (data: object) =>
  <LoginSuccessAction>{
    type: LOGIN_SUCCESS,
    payload: { data },
  };

export const loginFailed = () =>
  <LoginFailedAction>{
    type: LOGIN_FAILED,
  };
