import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import menuReducer from './menuReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function createStore() {
  const store = reduxCreateStore(combineReducers(menuReducer), applyMiddleware(logger, sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return store;
}

