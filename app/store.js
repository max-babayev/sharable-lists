import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

import combinedReducers from './reducers';

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    combinedReducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  );
}