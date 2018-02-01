import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PROJECTS_START,
  GET_PROJECTS_ERROR,
  GET_PROJECTS_SUCCESS,
} from 'actions/projects';
import api from 'api';

function createGetProjects(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    try {
      const data = yield call(() => api.backendgetAuthToken('Projects/?state=true'+options.data.request));

      const action = { type: GET_PROJECTS_SUCCESS, data};

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: GET_PROJECTS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}
export const getProjects = createGetProjects(false,getProjects);
export const getProjectsServer = createGetProjects(true);

export function* getProjectsWatcher() {
  yield takeLatest(GET_PROJECTS_START, getProjects);
}


export default [
  getProjectsWatcher(),
];