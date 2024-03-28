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
    <View style={styles.cardContainer}>
      {/* <CustomImageComponent
        defaultSource={ICONS.ic_dummy}
        imageSource={productImage}
        resizeMode="contain"
        customStyle={styles.productImage}
      /> */}
      <Pressable onPress={onCardPress}>
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
      </Pressable>
      <ProductCounter product={product} />
    </View>
  );
};

export default ProductCard;
