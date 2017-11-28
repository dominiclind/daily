import { Platform } from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native

const config = {
  key: 'root',
  storage,
}

let configureStore;

const reducers = persistCombineReducers(config, rootReducers)

let enhancer;
if (__DEV__) {
  enhancer = composeWithDevTools(
    applyMiddleware(thunkMiddleware),
  );
} else {
  enhancer = applyMiddleware(thunkMiddleware);
}

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  let persistor = persistStore(store)
  // persistor.purge()
  // const store = Reactotron.createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(persistCombineReducers(config, require('../reducers/index').default));
    });
  }
  return {persistor, store};
}
