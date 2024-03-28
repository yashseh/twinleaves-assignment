import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CounterButtonDetail from '../counterButtonDetail';
import {styles} from './styles';
import {IProductInfoProps, shouldRenderWeightAndMeasurement} from './types';
import {capitalizeFirstLetter} from '../../../../utils/utils';

const ProductInfo: React.FC<IProductInfoProps> = ({product}) => {
  const title = capitalizeFirstLetter(product?.name || '');
  const companyName = product?.company_detail?.name || '';
  const productMrp = `₹ ${product?.mrp?.mrp || 0}`;
  const weight = product?.weights_and_measures?.gross_weight;
  const unit = product?.weights_and_measures?.measurement_unit;
  const quantity = `${weight} ${unit}`;
  const shouldRenderQuantity = shouldRenderWeightAndMeasurement(
    weight ?? 0,
    unit ?? '',
  );
  return (
    <View style={styles.infoContainer}>
      <Text style={styles.brandName}>{companyName}</Text>
      <Text style={styles.brandDescription}>{title}</Text>
      {shouldRenderQuantity && (
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{quantity}</Text>
        </View>
      )}
      <View style={styles.bottomContainer}>
        <Text style={styles.mrp}>{productMrp}</Text>
        <CounterButtonDetail />
      </View>
    </View>
  );
};

export default ProductInfo;
