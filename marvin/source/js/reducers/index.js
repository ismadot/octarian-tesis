import { combineReducers } from 'redux';
import app from 'reducers/app';
import people from 'reducers/people';
import auth from 'reducers/auth';

export default combineReducers({
  app,
  auth,
  people,
});
