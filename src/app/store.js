import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducer from '../reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default configureStore(
    reducer,
    applyMiddleware(thunk, createLogger())
);