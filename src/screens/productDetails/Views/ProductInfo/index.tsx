import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../assets/themes';

const ProductInfo = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.card_grey,
        borderRadius: 16,
        padding: 20,
      }}>
      <Text>ProductInfo</Text>
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({});
