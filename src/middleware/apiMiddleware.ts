import { CHECK_TOKEN_FAILED, REDIRECT_LOGIN } from '../containers/Authenticated/constants';

const middlewareStorage =
  (store: { getState: () => void }) => (next: (action: object) => void) => (action: { type: string }) => {
    next(action);
    store.getState();
    console.log(store);
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
