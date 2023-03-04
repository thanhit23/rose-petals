import { call, put, takeLatest } from 'redux-saga/effects';
import { CHECK_TOKEN_REQUEST } from './constants';
import { isMe, setHeader } from './service';
import { setAuth, checkTokenSuccess, checkTokenFailed } from './actions';
import { AxiosResponse } from 'axios';

interface Props {
  type: string;
  payload: {
    token: string;
  };
}
interface ApiResponse {
  data: object;
  status: number;
}
function* sendReqToken({ payload: { token } }: Props) {
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
