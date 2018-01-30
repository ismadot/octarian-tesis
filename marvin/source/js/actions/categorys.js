export const GET_CATEGORYS_START   = 'GET_CATEGORYS_START';
export const GET_CATEGORYS_ERROR   = 'GET_CATEGORYS_ERROR';
export const GET_CATEGORYS_SUCCESS = 'GET_CATEGORYS_SUCCESS';

export function getCategorys(data) {
  return {
    type: GET_CATEGORYS_START,
  };
}

