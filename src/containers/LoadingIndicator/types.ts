import { SHOW_LOADING } from './constants';

export interface Props {
  showLoading: boolean;
}

export interface States {
  global: {
    loading: {
      showLoading: boolean;
    };
  };
}

export interface ShowLoadingAction {
  type: typeof SHOW_LOADING;
  payload: { isShow: boolean };
}
