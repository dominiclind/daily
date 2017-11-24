import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

import configureStore from './store/configureStore';
const {store,persistor} = configureStore();

import KitchenSink from 'app/containers/KitchenSink';
import Routes from 'app/routes';

class Root extends Component { 
  render () {
    return (
    	<Provider store={store}>
      	<PersistGate persistor={persistor}>
      	<Routes />
      	</PersistGate>
      </Provider>
    );
  }
}

export default Root;
