import {Alert, Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../assets/iconExpoter';
import {styles} from './styles';
import {IProductCounterProps} from './types';
import {STRINGS} from '../../../../utils/strings';

const ProductCounter: React.FC<IProductCounterProps> = ({
  incrementQuantityHandler,
  decrementQuantityHandler,
}) => {
  return (
    <View style={styles.counterContainer}>
      {true ? (
        <Pressable onPress={incrementQuantityHandler}>
          <Text style={styles.counterTitle}>{STRINGS.add}</Text>
        </Pressable>
      ) : (
        <View style={styles.quantityContainer}>
          <Pressable onPress={incrementQuantityHandler}>
            <Image style={styles.icon} source={ICONS.ic_minus} />
          </Pressable>
          <Text style={styles.counterTitle}>1</Text>
          <Pressable onPress={decrementQuantityHandler}>
            <Image style={styles.icon} source={ICONS.ic_plus} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default ProductCounter;
