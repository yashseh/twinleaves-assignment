import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ICONS} from '../../../../assets/iconExpoter';
import {colors} from '../../../../assets/themes';
import {STRINGS} from '../../../../utils/strings';
import {styles} from './styles';
import {ICounterButtonDetailProps} from './types';
import {getProductCount} from '../../../products/views/productCounter/types';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToCart,
  removeProductFromCart,
  cartProductsFromState,
} from '../../../../state/slices/cart/cartSlice';
import {touchSlope} from '../../../../constants/constants';

const CounterButtonDetail: React.FC<ICounterButtonDetailProps> = ({
  product,
}) => {
  const cartProducts = useSelector(cartProductsFromState);
  const dispatch = useDispatch();
  const getInitialQuantity = getProductCount(cartProducts, product);
  const [productCount, setProductCount] = useState(getInitialQuantity);

  useEffect(() => {
    setProductCount(getInitialQuantity);
  }, [cartProducts]);

  const addProduct = () => {
    setProductCount(prevCount => prevCount + 1);
    dispatch(addProductToCart({...product, quantity: productCount + 1}));
  };

  const removeProduct = () => {
    if (productCount > 0) {
      setProductCount(prevCount => prevCount - 1);
      dispatch(removeProductFromCart({...product, quantity: productCount - 1}));
    }
  };

  return (
    <View style={styles.counterContainer}>
      {!productCount ? (
        <Pressable hitSlop={touchSlope} onPress={addProduct}>
          <Text style={styles.counterTitle}>{STRINGS.add}</Text>
        </Pressable>
      ) : (
        <View style={styles.quantityContainer}>
          <Pressable hitSlop={touchSlope} onPress={removeProduct}>
            <Image source={ICONS.ic_minus} />
          </Pressable>
          <Text style={styles.counterTitle}>{productCount}</Text>
          <Pressable hitSlop={touchSlope} onPress={addProduct}>
            <Image style={styles.plusIcon} source={ICONS.ic_plus} />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CounterButtonDetail;
