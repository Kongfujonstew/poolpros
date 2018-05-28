import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './module';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

// ------------------------------------
// Hot reloading for reducers
// ------------------------------------

store.asyncReducers = {};

const replaceReducers = () => {
  store.replaceReducer(reducer);
};

export const injectAsyncReducers = (asyncReducers) => {
  const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
    if (store.asyncReducers[item]) {
      delete all[item];
    }

    return all;
  }, asyncReducers);

  store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
  replaceReducers(reducer);
};

if (module.hot) {
  module.hot.accept('./module', () => {
    const nextReducer = require('./module').default; // eslint-disable-line
    replaceReducers(nextReducer);
  });
}
