import { GET_ME_SUCCESS, LOGOUT } from './constants';
import { GetMeAction, LogoutAction } from './types';

export const getMe = (data: object): GetMeAction => ({
  type: GET_ME_SUCCESS,
  payload: { data },
});

export const logout = (): LogoutAction => ({
  type: LOGOUT,
});
