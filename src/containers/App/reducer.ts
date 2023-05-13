import produce from 'immer';
import { LOGIN_SUCCESS } from '../Login/constants';
import { SHOW_LOADING } from '../LoadingIndicator/constants';

export const initialState = {
  auth: null,
  loading: {
    showLoading: false,
  },
};

interface Action {
  type: string;
  payload?: any;
}

const appReducer = (state = initialState, action: Action) =>
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
