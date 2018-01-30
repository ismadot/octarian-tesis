import { combineReducers } from 'redux';
import people from 'reducers/people';
import categorys from 'reducers/categorys';
import auth from 'reducers/auth';
import info from 'reducers/info';
import app from 'reducers/app';

export default combineReducers({
  app,
  info,
  auth,
  people,
  categorys,
});
