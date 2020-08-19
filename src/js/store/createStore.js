import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mainReducer from './mainReducer';
// import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default function createStore() {
  const store = reduxCreateStore(combineReducers(mainReducer), applyMiddleware(logger, sagaMiddleware));
  // sagaMiddleware.run(rootSaga);

  return store;
}

