import React from 'react';
import {RootStackParamList, routNames} from './types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import Products from '../screens/products';
import ProductDetails from '../screens/productDetails';
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
          headerBackVisible: false,
          title: 'Products',
        }}
        name={routNames.products}
        component={Products}
      />
      <Stack.Screen
        options={{
          title: 'Product Details',
        }}
        name={routNames.productDetails}
        component={ProductDetails}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
