import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../../assets/themes';
import {loremIpsum} from '../../../../constants/constants';
import {IProductDescriptionProps} from './types';
import {styles} from './styles';
import {STRINGS} from '../../../../utils/strings';

const ProductDescription: React.FC<IProductDescriptionProps> = ({
  description,
}) => {
  return (
    <View style={styles.desContainer}>
      <Text style={styles.desTitle}>{STRINGS.description}</Text>
      <Text style={styles.des}>{description || loremIpsum}</Text>
    </View>
  );
};

export default ProductDescription;
