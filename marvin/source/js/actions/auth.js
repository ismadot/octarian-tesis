import api from 'api';

const LOAD_REQUEST = 'auth/LOAD_REQUEST';
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL    = 'auth/LOAD_FAIL';

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL 	= 'auth/LOGIN_FAIL';

const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL 	 = 'auth/LOGOUT_FAIL';

const CHANGE_REQUEST = 'auth/CHANGE_REQUEST';
const CHANGE_SUCCESS = 'auth/CHANGE_SUCCESS';
const CHANGE_FAIL 	 = 'auth/CHANGE_FAIL';

const FORGOT_REQUEST = 'auth/FORGOT_REQUEST';
const FORGOT_SUCCESS = 'auth/FORGOT_SUCCESS';
const FORGOT_FAIL 	 = 'auth/FORGOT_FAIL';

const TOKEN_REQUEST  = 'auth/TOKEN_REQUEST';
const TOKEN_RECEIVED = 'auth/TOKEN_SUCCESS';
const TOKEN_FAILURE  = 'auth/TOKEN_FAIL';

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return (dispatch) => {
  	 dispatch({type: LOAD_REQUEST});

  	 api.backend()
  	 .then(data => dispatch({type: LOAD_SUCCESS, data}))
  	 .catch(error => dispatch({type: LOAD_FAIL}));

  }
}

export function login(username, password) {
return (dispatch) => {
  	 dispatch({type: LOGIN_REQUEST, username, password});

  	 api.backend('/token-auth/',{method: 'POST'})
  	 .then(data => dispatch({type: LOGIN_SUCCESS, data}))
  	 .catch(error => dispatch({type: LOGIN_FAIL}));

  }
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}

export function refreshAccessToken(token) {
  return {
    types: [TOKEN_REQUEST, TOKEN_SUCCESS, TOKEN_FAILURE],
    promise: (client) => client.post('api/token-refresh/', {
      data: {
        token: token
      }
    })
  };
}
