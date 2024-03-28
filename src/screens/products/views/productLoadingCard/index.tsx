import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../../../../assets/themes';
import {styles} from './styles';

const ProductLoadingCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.skeltonImage} />
      <View style={styles.skeltonText} />
      <View>
        <View style={[styles.skeltonText, styles.topText]} />
        <View style={[styles.skeltonText, styles.bottomText]} />
      </View>
      <View style={[styles.skeltonText, styles.mrpText]} />
      <View style={styles.counter} />
    </View>
  );
};

export default memo(ProductLoadingCard);
