import { Map } from 'immutable';

import {
  GET_PROJECTS_START,
  GET_PROJECTS_ERROR,
  GET_PROJECTS_SUCCESS,
  
  POST_PROJECTS_START,
  POST_PROJECTS_ERROR,
  POST_PROJECTS_SUCCESS,
} from 'actions/projects';

const initialState = Map({
  loadingProjects: false,
  errorProjects: null,
  dataProjects: null,

  loadingPostProjects: false,
  errorPostProjects: null,
  dataPostProjects: null,
});

const actionsMap = {
  // Async action
  [GET_PROJECTS_START]: (state) => {
    return state.merge(Map({
      loadingProjects: true,
      errorProjects: null,
      dataProjects: null,
    }));
  },
  [GET_PROJECTS_ERROR]: (state, action) => {
    return state.merge(Map({
      loadingProjects: false,
      errorProjects: action.error.message,
    }));
  },
  [GET_PROJECTS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loadingProjects: false,
      dataProjects: action.data.data,
    }));
  },
  
  [POST_PROJECTS_START]: (state) => {
    return state.merge(Map({
      loadingPostProjects: true,
      errorPostProjects: null,
      dataPostProjects: null,
    }));
  },
  [POST_PROJECTS_ERROR]: (state, action) => {
    return state.merge(Map({
      loadingPostProjects: false,
      errorPostProjects: action.error.message,
    }));
  },
  [POST_PROJECTS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loadingPostProjects: false,
      dataPostProjects: action.data.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

