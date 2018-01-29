import { Map } from 'immutable';

import {
  GET_TOKEN_START,
  GET_TOKEN_ERROR,
  GET_TOKEN_SUCCESS,
} from 'actions/auth';

const initialState = Map({
  loadingAuth: false,
  errorAuth: null,
  tokenAuth: null,
});

const actionsMap = {
  // Async action
  [GET_TOKEN_START]: (state) => {
    return state.merge(Map({
      loadingAuth: true,
      errorAuth: null,
      tokenAuth: null,
    }));
  },
  [GET_TOKEN_ERROR]: (state, action) => {
    return state.merge(Map({
      loadingAuth: false,
      errorAuth: action.error.message,
    }));
  },
  [GET_TOKEN_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loadingAuth: false,
      tokenAuth: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

