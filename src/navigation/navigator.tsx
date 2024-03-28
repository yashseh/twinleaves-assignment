import React from 'react';
import {RootStackParamList, routNames} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import Products from '../screens/products';
import ProductDetails from '../screens/productDetails';
import Checkout from '../screens/checkout';
import Splash from '../screens/splash';
const Navigator = () => {
  //navigation Stack
  const Stack = createNativeStackNavigator<RootStackParamList>();

  //TODO: for now i have passed routes configuration here due to time shortage
  return (
    <Stack.Navigator initialRouteName={routNames.splash}>
      <Stack.Screen
        options={{
          headerBackVisible: false,
          title: 'Login',
        }}
        name={routNames.login}
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={routNames.products}
        component={Products}
      />
      <Stack.Screen
        options={{
          title: 'Checkout',
        }}
        name={routNames.checkout}
        component={Checkout}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Splash}
        name={routNames.splash}
      />
      <Stack.Screen
        options={{
          title: 'Product Details',
        }}
        name={routNames.productDetails}>
        {props => <ProductDetails {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigator;
