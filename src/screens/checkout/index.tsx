import {RefreshControl, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import CheckoutCard from './views/checkoutCard';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {
  cartProductsFromState,
  cartTotalFromState,
} from '../../state/slices/cart/cartSlice';
import {STRINGS} from '../../utils/strings';
import {FlashList} from '@shopify/flash-list';
import products from '../products';
import {productsMockData} from '../products/types';
import {ICartProduct} from '../../state/slices/cart/types';

const Checkout = () => {
  const cartProducts = useSelector(cartProductsFromState);
  const cartTotal = useSelector(cartTotalFromState);
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

  const listEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>{STRINGS.cart_empty}</Text>
      </View>
    );
  }, []);

  const ListFooterComponent = () => {
    return <View style={styles.footer} />;
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
        ListFooterComponent={ListFooterComponent}
        renderItem={renderItem}
      />
      {cartTotal > 0 && (
        <View style={styles.totalContainer}>
          <View style={styles.flex}>
            <Text style={styles.priceTitle}>Total Price:</Text>
            <Text style={styles.amount}>{` ₹${cartTotal}`}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Checkout;
