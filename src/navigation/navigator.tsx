import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackParamList, routNames} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
const Navigator = () => {
  //navigation Stack
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={routNames.login}>
      <Stack.Screen name={routNames.login} component={Login} />
    </Stack.Navigator>
  );
};

export default Navigator;
