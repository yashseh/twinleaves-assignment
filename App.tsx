import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Navigator from './src/navigation/navigator';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/state/store';
import LoaderWrapper from './src/wrappers/loaderWrapper';
import {useCameraPermission} from 'react-native-vision-camera';

const App = () => {
  const {requestPermission} = useCameraPermission();
  //Google SignIn Configuration
  GoogleSignin.configure({
    webClientId:
      '481761770778-r2hco2bm1tr6kgjum4u93m14ptuvj9s6.apps.googleusercontent.com',
  });

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <LoaderWrapper>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </LoaderWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
