import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICartWrapperProps} from './types';

const CartWrapper: React.FC<ICartWrapperProps> = ({children}) => {
  return (
    <View style={{flex: 1}}>
      <View>{children}</View>
      <View style={{width: '100%', height: 100, backgroundColor: 'blue'}} />
    </View>
  );
};

export default CartWrapper;

const styles = StyleSheet.create({});
