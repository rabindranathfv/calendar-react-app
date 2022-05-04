import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import { uiReducer } from './reducers/uiReducer';

const reducers = combineReducers({
  ui: uiReducer
});

// add for async actions
// const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  reducers
);

// export const store = createStore(
//   reducers,
//   composeEnhancers(
//     applyMiddleware(thunk)
//   )
// );
