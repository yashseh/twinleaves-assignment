import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../assets/iconExpoter';
import {colors} from '../../../../assets/themes';
import {STRINGS} from '../../../../utils/strings';
import {styles} from './styles';

const CounterButtonDetail = () => {
  return (
    <View style={styles.counterContainer}>
      <Pressable>
        <Text style={styles.counterTitle}>{STRINGS.add}</Text>
      </Pressable>
      {false && (
        <View style={styles.quantityContainer}>
          <Pressable>
            <Image source={ICONS.ic_minus} />
          </Pressable>
          <Text style={styles.counterTitle}>1</Text>
          <Pressable>
            <Image source={ICONS.ic_plus} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CounterButtonDetail;
