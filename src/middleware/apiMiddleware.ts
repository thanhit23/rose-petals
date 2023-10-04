import { CHECK_TOKEN_FAILED, REDIRECT_LOGIN } from 'src/containers/Authenticated/constants';
import { PATH_AUTH } from 'src/routes/paths';

const middlewareStorage =
  (store: { getState: () => void }) => (next: (action: object) => void) => (action: { type: string }) => {
    next(action);
    store.getState();
    switch (action.type) {
      case CHECK_TOKEN_FAILED:
        localStorage.removeItem('accessToken');
        window.location.href = PATH_AUTH.login;
        break;
      case REDIRECT_LOGIN: {
        window.location.href = PATH_AUTH.login;
        break;
      }
      default:
        break;
    }
  };

export default middlewareStorage;
