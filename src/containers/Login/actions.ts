import { LOGIN_FAILED, LOGIN_SUCCESS } from './constants';
import { LoginFailedAction, LoginSuccessAction } from './types';

export const loginSuccess = (data: object): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { data },
});

export const loginFailed = (): LoginFailedAction => ({
  type: LOGIN_FAILED,
});
