import {Alert, Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductInfo from './Views/productInfo';
import ProductDescription from './Views/productDescription';
import {styles} from './styles';
import {IProductDetailsParams} from './types';
import {IProduct} from '../../state/slices/products/types';
import {useSelector} from 'react-redux';
import {productsFromState} from '../../state/slices/products/productsSlice';
import {STRINGS} from '../../utils/strings';
import CartWrapper from '../../wrappers/cartWrapper';
import {ICONS} from '../../assets/iconExpoter';
import {colors} from '../../assets/themes';

const ProductDetails: React.FC<IProductDetailsParams> = ({route}) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [errorMessage, updateErrorMessage] = useState<string>('');
  const fetchedProducts = useSelector(productsFromState);

  useEffect(() => {
    getCurrentProduct();
  }, [route]);

  /**
   * getCurrentProduct - Function to retrieve the product data based on the route parameters.
   * If a product is directly provided in the route params, it sets the product state.
   * If a GTIN  is provided in the route params, it searches for
   * the corresponding product in the fetchedProducts array.
   * If the product is found, it updates the product state. Otherwise, it sets an error message.
   * If neither a product nor a GTIN is provided in the route params, it sets a generic error message.
   */
  const getCurrentProduct = () => {
    if (route?.params?.product) {
      setProduct(route.params.product);
    } else if (route.params?.gtin) {
      const item = fetchedProducts.find(
        element => element.gtin?.toString() === route.params.gtin?.toString(),
      );
      if (item) {
        setProduct(item);
      } else {
        updateErrorMessage(STRINGS.unable_to_find_the_product);
      }
    } else {
      updateErrorMessage(STRINGS.something_went_wrong);
    }
  };

  return (
    <CartWrapper>
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
      {!errorMessage && (
        <View style={styles.mainContainer}>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={ICONS.ic_front}
              />
            </View>
            <ProductInfo product={product} />
            <View style={styles.spacer} />
            <ProductDescription description={product?.description} />
          </ScrollView>
        </View>
      )}
    </CartWrapper>
  );
};

export default ProductDetails;
