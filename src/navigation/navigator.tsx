import React from 'react';
import {RootStackParamList, routNames} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import Products from '../screens/products';
import ProductDetails from '../screens/productDetails';
import Checkout from '../screens/checkout';
const Navigator = () => {
  //navigation Stack
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator initialRouteName={routNames.products}>
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
          title: 'Product Details',
        }}
        name={routNames.productDetails}>
        {props => <ProductDetails {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigator;
