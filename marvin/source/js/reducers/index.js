import { combineReducers } from 'redux';
import people from 'reducers/people';
import categorys from 'reducers/categorys';
import projects from 'reducers/projects';
import auth from 'reducers/auth';
import info from 'reducers/info';
import app from 'reducers/app';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

// redux persist is a library for data persist in store
const configRoot = {
  key: 'root',
  storage
}

const configAuth = {
  key: 'auth',
  storage
}

const root = combineReducers({
  app,
  info,
  auth: persistReducer( configAuth, auth ),
  people,
  projects,
  categorys
});

export default persistReducer( configRoot, root)
