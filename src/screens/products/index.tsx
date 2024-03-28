import {
  View,
  Text,
  RefreshControl,
  Alert,
  BackHandler,
  ActivityIndicator,
} from 'react-native';
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
import ProductsHeader from './views/header';
import {useCameraPermission} from 'react-native-vision-camera';
import {colors} from '../../assets/themes';
import BrCodeScanner from './views/brcodescanner';

const Products = () => {
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  const products = useSelector(productsFromState);
  const totalPages = useSelector(productsTotalPages);
  const productsError = useSelector(productsErrorFromState);
  const [currentPageCount, updateCurrentPageCount] = useState(1);
  const {hasPermission, requestPermission} = useCameraPermission();
  const [loading, updateIsLoading] = useState(true);
  const [isRefreshing, updateIsRefreshing] = useState(false);
  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);
  const [isCameraActive, updateIsCameraActive] = useState(false);

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

  // to hide the refresher after pull to refresh
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

  // backButton press handler when camera is on
  useEffect(() => {
    const backAction = () => {
      closeCamera();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  //flashlist component --------------------------------->

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
    updateIsLoading(true);
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

  //list footer compontent
  const renderFooter = useCallback(() => {
    return (
      <View>
        {currentPageCount < totalPages ? (
          <ActivityIndicator color={colors.navy_blue} size={'large'} />
        ) : (
          <View style={styles.bottomSpace} />
        )}
      </View>
    );
  }, [currentPageCount]);

  //-------------------------XX------------------------>

  // to close the camera
  const closeCamera = () => {
    updateIsCameraActive(false);
    setShowBarcodeScanner(false);
  };

  //barcode icon button press handler
  const barcodePressHandler = async () => {
    if (hasPermission) {
      setShowBarcodeScanner(true);
      updateIsCameraActive(true);
    } else {
      const request = await requestPermission();
      if (!request) {
        Alert.alert(
          'Please allow camera access from settings in order to user feature',
        );
      }
    }
  };

  return (
    <CartWrapper>
      <ProductsHeader barcodePressHandler={barcodePressHandler} />
      <View style={styles.container}>
        <FlashList
          keyExtractor={(_, index) => `${index}${_.gtin}`}
          numColumns={2}
          estimatedItemSize={213}
          getItemType={item => `${item.gtin}`}
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
          onEndReachedThreshold={1}
          ListFooterComponent={renderFooter}
          renderItem={renderItem}
        />
      </View>
      {showBarcodeScanner && (
        <BrCodeScanner
          closeCameraPopup={closeCamera}
          isActive={isCameraActive}
        />
      )}
    </CartWrapper>
  );
};

export default Products;
