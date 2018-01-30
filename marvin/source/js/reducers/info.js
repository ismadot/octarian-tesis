import { Map } from 'immutable';

import {
  GET_INFO_START,
  GET_INFO_ERROR,
  GET_INFO_SUCCESS,
} from 'actions/info';

const initialState = Map({
  loadingInfo: false,
  errorInfo: null,
  dataInfo: null,
});

const actionsMap = {
  // Async action
  [GET_INFO_START]: (state) => {
    return state.merge(Map({
      loadingInfo: true,
      errorInfo: null,
      dataInfo: null,
    }));
  },
  [GET_INFO_ERROR]: (state, action) => {
    return state.merge(Map({
      loadingInfo: false,
      errorInfo: action.error.message,
    }));
  },
  [GET_INFO_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loadingInfo: false,
      dataInfo: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

