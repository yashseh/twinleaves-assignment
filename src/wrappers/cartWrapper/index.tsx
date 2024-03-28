import {
  Button,
  Easing,
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
import {useDispatch, useSelector} from 'react-redux';
import {
  cartProductsFromState,
  cartTotalFromState,
  removeCart,
} from '../../state/slices/cart/cartSlice';
import {touchSlope} from '../../constants/constants';
import {AnimatedView} from 'react-native-reanimated/lib/typescript/reanimated2/component/View';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
} from 'react-native-reanimated';

const CartWrapper: React.FC<ICartWrapperProps> = ({children}) => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useDispatch();
  const cartProducts = useSelector(cartProductsFromState);
  const cartTotal = useSelector(cartTotalFromState);
  const navigateToCheckout = useCallback(() => {
    navigation.navigate('checkout');
  }, []);

  const removeCartHandler = () => {
    dispatch(removeCart());
  };

  return (
    <View style={styles.mainView}>
      {children}
      {cartProducts.length > 0 && (
        <Animated.View
          entering={FadeInDown}
          exiting={FadeOutDown}
          style={styles.cartContainer}>
          <View style={styles.flex}>
            <Text style={styles.priceTitle}>Total Price:</Text>
            <Text style={styles.amount}>{` ₹${cartTotal}`}</Text>
          </View>
          <View style={styles.flex}>
            <Button onPress={navigateToCheckout} title={STRINGS.checkout} />
            <TouchableOpacity
              onPress={removeCartHandler}
              hitSlop={touchSlope}
              style={styles.bin}>
              <Image source={ICONS.ic_bin} />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export default CartWrapper;
