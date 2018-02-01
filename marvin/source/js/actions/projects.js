export const GET_PROJECTS_START   = 'GET_PROJECTS_START';
export const GET_PROJECTS_ERROR   = 'GET_PROJECTS_ERROR';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';

export function getProjects(data) {
  return {
    type: GET_PROJECTS_START,
    data
  };
}

