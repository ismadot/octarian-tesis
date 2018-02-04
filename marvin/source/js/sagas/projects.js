import { takeLatest, call, put } from 'redux-saga/effects';

import {
  GET_PROJECTS_START,
  GET_PROJECTS_ERROR,
  GET_PROJECTS_SUCCESS,
  POST_PROJECTS_START,
  POST_PROJECTS_ERROR,
  POST_PROJECTS_SUCCESS,
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

function createPostProjects(isServer = false) {
  return function* (options) { // eslint-disable-line consistent-return
    console.log(options)
    try {
      const data = yield call(() => api.backendPostProject('Projects/',options.data,{method:'POST'}));

      const action = { type: POST_PROJECTS_SUCCESS, data};

      if (isServer) {
        return action;
      }

      yield put(action);
    } catch (error) {
      const action = { type: POST_PROJECTS_ERROR, error };

      if (isServer) {
        return action;
      }

      yield put(action);
    }
  };
}
export const postProjects = createPostProjects(false,postProjects);
export const postProjectsServer = createPostProjects(true);

export function* postProjectsWatcher() {
  yield takeLatest(POST_PROJECTS_START, postProjects);
}


export default [
  getProjectsWatcher(),
  postProjectsWatcher(),
];