import produce from 'immer';

import { MapAction } from 'src/common/types';
import { GET_ME_SUCCESS, LOGOUT } from 'src/containers/Authenticated/constants';
import { GetMePayload } from 'src/containers/Authenticated/types';
import { SHOW_LOADING } from 'src/containers/LoadingIndicator/constants';
import { ShowLoadingPayload } from 'src/containers/LoadingIndicator/types';
import { LOGIN_SUCCESS } from 'src/containers/Login/constants';
import { LoginFailedPayload, LoginSuccessPayload } from 'src/containers/Login/types';

import { CHANGE_LOCALE } from '../../layouts/TopBar/constants';
import { ChangeLocalePayload } from '../../layouts/TopBar/types';
import { CATEGORY_LIST, PRODUCT_CART_LIST } from './constant';
import { CategoryListPayload, ProductCartListPayload } from './types';

export const initialState = {
  locale: localStorage.getItem('locale') || 'en',
  auth: {} || null,
  loading: {
    showLoading: false,
  },
  categoryList: [] || null,
  product: {
    cart: {
      list: [] || null,
    },
    detail: {},
  },
};

type Action = {
  LOGIN_SUCCESS: LoginSuccessPayload;
  SHOW_LOADING: ShowLoadingPayload;
  CATEGORY_LIST: CategoryListPayload;
  PRODUCT_CART_LIST: ProductCartListPayload;
  LOGIN_FAILED: LoginFailedPayload;
  GET_ME_SUCCESS: GetMePayload;
  CHANGE_LOCALE: ChangeLocalePayload;
  LOGOUT_REQUEST: never;
  LOGOUT: never;
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
        localStorage.setItem('accessToken', token);
        break;
      }
      case CATEGORY_LIST: {
        const {
          payload: { data },
        } = action;
        draft.categoryList = data;
        break;
      }
      case CHANGE_LOCALE: {
        const {
          payload: { locale },
        } = action;
        draft.locale = locale;
        break;
      }
      case PRODUCT_CART_LIST: {
        const {
          payload: { data },
        } = action;
        draft.product.cart.list = data;
        break;
      }
      case LOGOUT: {
        draft.auth = null;
        localStorage.removeItem('accessToken');
        break;
      }
      case GET_ME_SUCCESS: {
        const {
          payload: { data },
        } = action;
        draft.auth = data;
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
