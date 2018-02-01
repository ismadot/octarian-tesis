import { all } from 'redux-saga/effects';

import categorysSagas from 'sagas/categorys';
import peopleSagas from 'sagas/people';
import authSagas from 'sagas/auth';
import infoSagas from 'sagas/info';
import projectSagas from 'sagas/projects';

export default function* rootSaga() {
  yield all([
    ...peopleSagas,
    ...categorysSagas,
    ...authSagas,
    ...infoSagas,
    ...projectSagas,
  ]);
}
