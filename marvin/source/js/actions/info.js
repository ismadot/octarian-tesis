export const GET_INFO_START   = 'GET_INFO_START';
export const GET_INFO_ERROR   = 'GET_INFO_ERROR';
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS';

export function getInfo(data) {
  return {
    type: GET_INFO_START,
  };
}

