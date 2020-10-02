import { createStore, combineReducers, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer.store";

import rootSaga from "./saga.store";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

function createReducer(asyncReducers: any = {}) {
  return combineReducers({
    ...rootReducer,
    ...asyncReducers,
  });
}

function createSagaInjector(runSaga: any, rootSaga: any) {
  // Create a dictionary to keep track of injected sagas
  const injectedSagas = new Map();

  const isInjected = (key: string) => injectedSagas.has(key);

  const injectSaga = (key: string, saga: any) => {
    // We won't run saga if it is already injected
    if (isInjected(key)) return;

    // Sagas return task when they executed, which can be used
    // to cancel them
    const task = runSaga(saga);

    // Save the task if we want to cancel it in the future
    injectedSagas.set(key, task);
  };

  // Inject the root saga as it a staticlly loaded file,
  injectSaga("root", rootSaga);

  return injectSaga;
}

// Configure the store
export default function configureStore(initialState?: any) {

  // Add sagas middleware
  const store: any = createStore(
    createReducer(),
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  // Add a dictionary to keep track of the registered async reducers
  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key: string, asyncReducer: any) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Add injectSaga method to our store
  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga);

  // Return the modified store
  return store;
}
