import { all } from 'redux-saga/effects';

import peopleSagas from 'sagas/people';
import authSagas from 'sagas/auth';

export default function* rootSaga() {
  yield all([
    ...peopleSagas,
    ...authSagas,
  ]);
}
