import {View, Text, FlatList, RefreshControl} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import ProductCard from './views/productCard';
import {
  fetchProducts,
  productsErrorFromState,
  productsFromState,
  productsTotalPages,
} from '../../state/slices/products/productsSlice';
import {useAppDispatch} from '../../state/store';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../navigation/types';
import {FlashList} from '@shopify/flash-list';
import {IProduct} from '../../state/slices/products/types';
import ProductLoadingCard from './views/productLoadingCard';
import {productsMockData} from './types';
import {STRINGS} from '../../utils/strings';
import CartWrapper from '../../wrappers/cartWrapper';

const Products = () => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  const products = useSelector(productsFromState);
  const totalPages = useSelector(productsTotalPages);
  const productsError = useSelector(productsErrorFromState);
  const [currentPageCount, updateCurrentPageCount] = useState(1);
  const [loading, updateIsLoading] = useState(true);
  const [isRefreshing, updateIsRefreshing] = useState(false);

  // api call to get products
  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchProducts(currentPageCount));
      updateIsLoading(false);
      if (isRefreshing) {
        updateIsRefreshing(false);
      }
    };

    fetch();
  }, [currentPageCount, isRefreshing, dispatch]);

  useEffect(() => {
    if (isRefreshing) {
      updateIsRefreshing(false);
    }
  }, [products, isRefreshing]);

  // on card is pressed
  const cardPressExecutor = (item: IProduct) => {
    navigation.navigate('productDetails', {
      product: item,
    });
  };

  // to give vertical spacing between items
  const itemSeparatorComponent = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  // list render item
  const renderItem = useCallback(
    ({item, index}: {item: IProduct; index: number}) => {
      return (
        <View style={styles.cardContainer}>
          {loading && <ProductLoadingCard />}
          {!loading && (
            <ProductCard
              product={item}
              onCardPress={() => cardPressExecutor(item)}
            />
          )}
        </View>
      );
    },
    [products, loading],
  );

  // to increment the page
  const incrementPage = () => {
    if (currentPageCount < totalPages) {
      updateCurrentPageCount(prev => prev + 1);
    }
  };

  // pull to refresh handler
  const refreshProducts = () => {
    updateIsRefreshing(true);
    updateCurrentPageCount(1);
  };

  // renderer in case of empty data or error from the api
  const listEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        {productsError ? (
          <Text style={styles.errorMessage}>
            {STRINGS.failed_to_load_products_Please_try_again}
          </Text>
        ) : (
          <Text style={styles.errorMessage}>{STRINGS.no_products_found}</Text>
        )}
      </View>
    );
  };

  return (
    <CartWrapper>
      <View style={styles.container}>
        <FlashList
          keyExtractor={(_, index) => `${index}${_.gtin}`}
          numColumns={2}
          estimatedItemSize={213}
          onEndReached={incrementPage}
          ItemSeparatorComponent={itemSeparatorComponent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={listEmptyComponent}
          data={loading ? productsMockData : products}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing ?? false}
              onRefresh={refreshProducts}
            />
          }
          onEndReachedThreshold={0.2}
          renderItem={renderItem}
        />
      </View>
    </CartWrapper>
  );
};

export default Products;
