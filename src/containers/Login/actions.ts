import { LOGIN_SUCCESS } from './constants';
import { LoginSuccessAction, LoginSuccessData } from './types';

export const loginSuccess = (data: LoginSuccessData): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: { data },
});
