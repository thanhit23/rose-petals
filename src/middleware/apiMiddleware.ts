import {
  CHECK_TOKEN_FAILED,
  REDIRECT_LOGIN,
} from '../containers/Authenticated/constants';

const middlewareStorage = (store: any) => (next: (action: {}) => {}) => (action: { type: string }) => {
  next(action);
  store.getState();
  switch (action.type) {
    case CHECK_TOKEN_FAILED:
      localStorage.removeItem('token');
      window.location.href = '/login';
      break;
    case REDIRECT_LOGIN: {
      window.location.href = '/login';
      break;
    }
    default:
      break;
  }
};

export default middlewareStorage;
