import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import CustomImageComponent from '../../../../components/CustomImageComponent';
import {ICONS} from '../../../../assets/iconExpoter';
import {capitalizeFirstLetter} from '../../../../utils/utils';
import ProductCounter from '../productCounter';
import {styles} from './styles';
import {IProductCardPros} from './types';

const ProductCard: React.FC<IProductCardPros> = ({product, onCardPress}) => {
  const title = capitalizeFirstLetter(product?.name ?? '');
  const companyName = product?.company_detail?.name ?? '';
  const productImage = product.images?.front ?? null;
  const productMrp = `₹ ${product?.mrp?.mrp ?? 0}`;

  return (
    <Pressable onPress={onCardPress} style={styles.cardContainer}>
      {/* <CustomImageComponent
        defaultSource={ICONS.ic_dummy}
        imageSource={productImage}
        resizeMode="contain"
        customStyle={styles.productImage}
      /> */}
      <Image
        source={ICONS.ic_dummy}
        resizeMode="contain"
        style={styles.productImage}
      />
      <View style={styles.spacer}>
        <Text numberOfLines={1} style={styles.brandName}>
          {companyName}
        </Text>
        <Text
          numberOfLines={2}
          lineBreakMode="tail"
          style={styles.productDescription}>
          {title}
        </Text>
        <Text style={styles.amount}>{productMrp}</Text>
      </View>
      <ProductCounter
        incrementQuantityHandler={function (): void {
          throw new Error('Function not implemented.');
        }}
        decrementQuantityHandler={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Pressable>
  );
};

export default ProductCard;
