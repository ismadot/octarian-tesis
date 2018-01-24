import api from 'api';

export const LOAD_REQUEST = 'auth/LOAD_REQUEST';
export const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
export const LOAD_FAIL    = 'auth/LOAD_FAIL';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL    = 'LOGIN_FAIL';

export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
export const LOGOUT_FAIL   = 'auth/LOGOUT_FAIL';

const CHANGE_REQUEST = 'auth/CHANGE_REQUEST';
const CHANGE_SUCCESS = 'auth/CHANGE_SUCCESS';
const CHANGE_FAIL    = 'auth/CHANGE_FAIL';

const FORGOT_REQUEST = 'auth/FORGOT_REQUEST';
const FORGOT_SUCCESS = 'auth/FORGOT_SUCCESS';
const FORGOT_FAIL    = 'auth/FORGOT_FAIL';

export const TOKEN_REQUEST  = 'auth/TOKEN_REQUEST';
export const TOKEN_SUCCESS  = 'auth/TOKEN_SUCCESS';
export const TOKEN_FAIL     = 'auth/TOKEN_FAIL';

function authRequest(){
  return {
    type: LOGIN_REQUEST
  };
}

function authSuccess(data){
  console.log(data)
  return {
    type: LOGIN_SUCCESS,
    data
  }
}

function authFail(error){
  return {
    type: LOGIN_FAIL,
    error
  }
}


export function login(username, password) {
  return (dispatch) => {
     dispatch(authRequest());

     api.backendgetAuthToken('token-auth/',{username, password},{method:'POST'})
     .then(data => dispatch(authSuccess(data)))
     .catch(error => dispatch(authFail(error)));
  }
}



export function load() {
  return (dispatch) => {
     dispatch({type: LOAD_REQUEST});

     api.backend('/load/')
     .then(data => dispatch({type: LOAD_SUCCESS, data}))
     .catch(error => dispatch({type: LOAD_FAIL}));
  }
}

export function logout() {
  return (dispatch) => {
    dispatch({type: LOGOUT_REQUEST})

    api.backend('/logout/',{},{method: 'POST'})
    .then(data => dispatch({type: LOGOUT_SUCCESS, data}))
    .catch(error => dispatch({type: LOGOUT_FAIL, error}));
  }
}

export function refreshAccessToken(token) {
  return (dispatch) => {
    dispatch({type: TOKEN_REQUEST, token});

    api.backend('/token-refresh/',{token},{methodo:'POST'})
    .then(data => dispatch({type: TOKEN_SUCCESS, data}))
    .catch(error => dispatch({type: TOKEN_FAIL, error}));
  };
}

