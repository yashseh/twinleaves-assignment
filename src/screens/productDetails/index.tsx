import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../assets/themes';
import ProductInfo from './Views/ProductInfo';

const ProductDetails = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
      }}>
      <ProductInfo />
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
