import produce from 'immer';
import { LOGIN_SUCCESS } from '../Login/constants';

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
      default:
        break;
    }
  });

export default appReducer;
