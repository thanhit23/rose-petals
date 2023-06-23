import produce from 'immer';

import { MapAction } from 'src/common/types';
import { SHOW_LOADING } from 'src/containers/LoadingIndicator/constants';
import { ShowLoadingPayload } from 'src/containers/LoadingIndicator/types';
import { LOGIN_SUCCESS } from 'src/containers/Login/constants';
import { LoginFailedPayload, LoginSuccessPayload } from 'src/containers/Login/types';

export const initialState = {
  auth: {},
  loading: {
    showLoading: false,
  },
};

type Action = {
  LOGIN_SUCCESS: LoginSuccessPayload;
  SHOW_LOADING: ShowLoadingPayload;
  LOGIN_FAILED: LoginFailedPayload;
  LOGOUT_REQUEST: never;
};

const appReducer = (state = initialState, action: MapAction<Action>) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS: {
        const {
          payload: {
            data: {
              user,
              tokens: {
                access: { token },
              },
            },
          },
        } = action;
        draft.auth = user;
        localStorage.setItem('token', token);
        break;
      }
      case SHOW_LOADING: {
        const {
          payload: { isShow },
        } = action;
        draft.loading.showLoading = isShow;
        break;
      }
      default:
        break;
    }
  });

export default appReducer;
