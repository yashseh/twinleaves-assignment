import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Navigator from './src/navigation/navigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/state/store';

const App = () => {
  //Google SignIn Configuration
  GoogleSignin.configure({
    webClientId:
      '481761770778-r2hco2bm1tr6kgjum4u93m14ptuvj9s6.apps.googleusercontent.com',
  });

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
