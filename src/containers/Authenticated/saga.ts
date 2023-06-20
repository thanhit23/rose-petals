import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import { checkTokenFailed, checkTokenSuccess, setAuth } from './actions';
import { CHECK_TOKEN_REQUEST } from './constants';
import { isMe, setHeader } from './service';
import { ApiResponse, PropsSendReqToken } from './types';

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
