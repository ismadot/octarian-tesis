import { Map } from 'immutable';

import {
  GET_CATEGORYS_START,
  GET_CATEGORYS_ERROR,
  GET_CATEGORYS_SUCCESS,
} from 'actions/categorys';

const initialState = Map({
  loadingCategorys: false,
  errorCategorys: null,
  dataCategorys: null,
});

const actionsMap = {
  // Async action
  [GET_CATEGORYS_START]: (state) => {
    return state.merge(Map({
      loadingCategorys: true,
      errorCategorys: null,
      dataCategorys: null,
    }));
  },
  [GET_CATEGORYS_ERROR]: (state, action) => {
    return state.merge(Map({
      loadingCategorys: false,
      errorCategorys: action.error.message,
    }));
  },
  [GET_CATEGORYS_SUCCESS]: (state, action) => {
    return state.merge(Map({
      loadingCategorys: false,
      dataCategorys: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}

