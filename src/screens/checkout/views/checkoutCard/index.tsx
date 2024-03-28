import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICONS} from '../../../../assets/iconExpoter';
import {styles} from './styles';
import CounterButtonDetail from '../../../productDetails/Views/counterButtonDetail';
import {ICheckoutProductCard} from './types';
import {capitalizeFirstLetter} from '../../../../utils/utils';

const CheckoutProductCard: React.FC<ICheckoutProductCard> = ({product}) => {
  const title = capitalizeFirstLetter(product?.name ?? '');
  const companyName = product?.company_detail?.name ?? '';
  //   const productImage = product.images?.front ?? null;
  const productMrp = `₹ ${product?.mrp?.mrp ?? 0}`;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.flex}>
        <Image
          source={ICONS.ic_dummy}
          resizeMode="contain"
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <Text numberOfLines={1} style={styles.brandName}>
            {companyName}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productDescription}>
            {title}
          </Text>
          <Text style={styles.amount}>{productMrp}</Text>
        </View>
      </View>
      <CounterButtonDetail product={product} />
    </View>
  );
};

export default CheckoutProductCard;
