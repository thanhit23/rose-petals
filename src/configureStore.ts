import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import createReducer from './reducers';
import middlewareStorage from './middleware/apiMiddleware';

export default function configureStore(initialState = {}) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];
  

  const enhancer = compose(
    // @ts-ignore
    applyMiddleware(thunk, ...middlewares, middlewareStorage),
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  const store = createStore(createReducer(), initialState, enhancer);

  // Extensions
  // @ts-ignore
  store.runSaga = sagaMiddleware.run;
  // @ts-ignore
  store.injectedReducers = {}; // Reducer registry
  // @ts-ignore
  store.injectedSagas = {}; // Saga registry

  return store;
}
