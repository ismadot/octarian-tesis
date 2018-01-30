import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_INFO_START,
  GET_INFO_ERROR,
  GET_INFO_SUCCESS,
} from 'actions/info';
import api from 'api';

function createGetInfo(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.backendgetAuthToken('Projects/?state=true'));
      
      const action = { type: GET_INFO_SUCCESS, data};
      
      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_INFO_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}
export const getInfo = createGetInfo(false,getInfo);
export const getInfoServer = createGetInfo(true);

export function* getInfoWatcher() {
  yield takeLatest(GET_INFO_START, getInfo);
}


export default [
  getInfoWatcher(),
];