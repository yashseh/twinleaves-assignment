import {RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import CheckoutCard from './views/checkoutCard';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {cartProductsFromState} from '../../state/slices/cart/cartSlice';
import {STRINGS} from '../../utils/strings';
import {FlashList} from '@shopify/flash-list';
import products from '../products';
import {productsMockData} from '../products/types';
import {ICartProduct} from '../../state/slices/cart/types';

const Checkout = () => {
  const cartProducts = useSelector(cartProductsFromState);

  const renderItem = useCallback(
    ({item}: {item: ICartProduct}) => {
      return (
        <View>
          <CheckoutCard product={item} />
        </View>
      );
    },
    [cartProducts],
  );

  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{STRINGS.cart_empty}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlashList
        keyExtractor={(_, index) => `${index}${_.gtin}`}
        estimatedItemSize={150}
        ListEmptyComponent={listEmptyComponent}
        getItemType={item => `${item.gtin}`}
        showsVerticalScrollIndicator={false}
        data={cartProducts}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Checkout;
