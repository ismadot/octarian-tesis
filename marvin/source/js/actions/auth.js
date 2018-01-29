export const GET_TOKEN_START   = 'GET_TOKEN_START';
export const GET_TOKEN_ERROR   = 'GET_TOKEN_ERROR';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';

export function getToken(data) {
  return {
    type: GET_TOKEN_START,
    data
  };
}

