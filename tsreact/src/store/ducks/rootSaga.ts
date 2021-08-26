import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

export default function* rootSaga(): any {
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    ]);
}

// https://stackoverflow.com/questions/66922379/yield-expression-implicitly-results-in-an-any-type-because-its-containing-ge