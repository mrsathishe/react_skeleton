import { applyMiddleware, createStore } from '@reduxjs/toolkit';

import 'regenerator-runtime/runtime';

import rootReducer from '../reducer';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from '../actions';

const sagaMiddleware = createSagaMiddleware();
export default createStore(
    rootReducer, applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);