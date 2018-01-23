import { Map } from 'immutable';

import {
    LOAD_REQUEST,
    LOAD_SUCCESS,
    LOAD_FAIL,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
} from 'actions/auth';

const initialState = Map({
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
});

const actionsMap = {
  [LOAD_REQUEST]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [LOAD_FAIL]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [LOAD_SUCCESS]: (state, action) => {
      return state.merge(Map({
        asyncLoading: false,
        asyncData: action.data,
      }));
    },
  [LOGIN_REQUEST]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [LOGIN_FAIL]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [LOGIN_SUCCESS]: (state, action) => {
      return state.merge(Map({
        asyncLoading: false,
        asyncData:action.data,
      }));
  },
  [LOGOUT_REQUEST]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [LOGOUT_FAIL]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [LOGOUT_SUCCESS]: (state, action) => {
      return state.merge(Map({
        asyncLoading: false,
        asyncData: action.data,
      }));
    },
  };

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}