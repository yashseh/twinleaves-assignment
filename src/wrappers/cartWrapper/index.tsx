import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback} from 'react';
import {ICartWrapperProps} from './types';
import {colors} from '../../assets/themes';
import {STRINGS} from '../../utils/strings';
import {ICONS} from '../../assets/iconExpoter';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../navigation/types';

const CartWrapper: React.FC<ICartWrapperProps> = ({children}) => {
  const navigation = useNavigation<NavigationProps>();

  const navigateToCheckout = useCallback(() => {
    navigation.navigate('checkout');
  }, []);

  return (
    <View style={styles.mainView}>
      {children}
      <View style={styles.cartContainer}>
        <View style={styles.flex}>
          <Text style={styles.priceTitle}>Total Price:</Text>
          <Text style={styles.amount}>₹35</Text>
        </View>
        <View style={styles.flex}>
          <Button onPress={navigateToCheckout} title={STRINGS.checkout} />
          <TouchableOpacity
            hitSlop={{
              left: 20,
              top: 20,
            }}
            style={styles.bin}>
            <Image source={ICONS.ic_bin} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartWrapper;
