import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CheckoutCard from './views/checkoutCard';
import {styles} from './styles';

const Checkout = () => {
  return (
    <View style={styles.container}>
      <CheckoutCard />
    </View>
  );
};

export default Checkout;
