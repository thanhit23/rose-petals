import { SHOW_LOADING } from './constants';
import { ShowLoadingAction } from './types';

export const isShowLoading = (isShow: boolean): ShowLoadingAction => ({ type: SHOW_LOADING, payload: { isShow } });
