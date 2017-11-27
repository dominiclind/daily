import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import codePush from "react-native-code-push";


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

let codePushOptions = {
	checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
 installMode: codePush.InstallMode.IMMEDIATE
};

export default codePush(codePushOptions)(Root);
