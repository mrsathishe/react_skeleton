import { all } from '@redux-saga/core/effects';
import app from './app.asyncactions';

export * from './app.action';


export default function* rootSaga(){
    yield all([
        app(),
    ]);
}