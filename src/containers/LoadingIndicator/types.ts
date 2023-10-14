import { SHOW_LOADING } from './constants';

export interface ShowLoadingPayload {
  isShow: boolean;
}

export interface ShowLoadingAction {
  type: typeof SHOW_LOADING;
  payload: ShowLoadingPayload;
}
