export const GET_PROJECTS_START   = 'GET_PROJECTS_START';
export const GET_PROJECTS_ERROR   = 'GET_PROJECTS_ERROR';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';

export const POST_PROJECTS_START   = 'POST_PROJECTS_START';
export const POST_PROJECTS_ERROR   = 'POST_PROJECTS_ERROR';
export const POST_PROJECTS_SUCCESS = 'POST_PROJECTS_SUCCESS';

export function getProjects(data) {
  return {
    type: GET_PROJECTS_START,
    data
  };
}

export function postProjects(data) {
  return {
    type: POST_PROJECTS_START,
    data
  };
}

