import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_TOKEN_START,
  GET_TOKEN_ERROR,
  GET_TOKEN_SUCCESS,
} from 'actions/auth';
import api from 'api';

function createGetToken(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.backendgetAuthToken('token-auth/', options.data , {method:'POST'}));
      
      const action = { type: GET_TOKEN_SUCCESS, data};
      
      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_TOKEN_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}
export const getToken = createGetToken(false,getToken);
export const getTokenServer = createGetToken(true);

export function* getTokenWatcher() {
  yield takeLatest(GET_TOKEN_START, getToken);
}


export default [
  getTokenWatcher(),
];