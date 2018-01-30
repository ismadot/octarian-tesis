import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_CATEGORYS_START,
  GET_CATEGORYS_ERROR,
  GET_CATEGORYS_SUCCESS,
} from 'actions/categorys';
import api from 'api';

function createGetCategorys(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.backendgetAuthToken('Categorys/?limit=0'));
      
      const action = { type: GET_CATEGORYS_SUCCESS, data};
      
      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_CATEGORYS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}
export const getCategorys = createGetCategorys(false,getCategorys);
export const getCategorysServer = createGetCategorys(true);

export function* getCategorysWatcher() {
  yield takeLatest(GET_CATEGORYS_START, getCategorys);
}


export default [
  getCategorysWatcher(),
];