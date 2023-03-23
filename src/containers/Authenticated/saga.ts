import { call, put, takeLatest } from 'redux-saga/effects';
import { CHECK_TOKEN_REQUEST } from './constants';
import { isMe, setHeader } from './service';
import { setAuth, checkTokenSuccess, checkTokenFailed } from './actions';
import { AxiosResponse } from 'axios';

import { PropsSendReqToken, ApiResponse } from './types';

function* sendReqToken({ payload: { token } }: PropsSendReqToken) {
  yield call(setHeader, token);
  const res: AxiosResponse<ApiResponse> = yield call(isMe);

  const {
    data: { data, status },
  } = res;
  if (status) {
    yield put(setAuth(data));
    yield put(checkTokenSuccess());
  } else {
    yield put(checkTokenFailed());
  }
}

export default function* authSaga() {
  yield takeLatest(CHECK_TOKEN_REQUEST, sendReqToken);
}
