import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomImageComponent from '../../../../components/CustomImageComponent';
import {ICONS} from '../../../../assets/iconExpoter';
import {useDispatch, useSelector} from 'react-redux';
import {userDetailsFromStore} from '../../../../state/slices/user/userSlice';
import {styles} from './styles';
import {STRINGS} from '../../../../utils/strings';
import {
  Camera,
  useCameraDevice,
  useCameraDevices,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {IProductsHeaderProps} from './types';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../../navigation/types';
import exportObj from '../../../../state/store';
import {displayLoader} from '../../../../state/slices/global/globalSlice';

const ProductsHeader: React.FC<IProductsHeaderProps> = ({
  barcodePressHandler,
}) => {
  const userDetails = useSelector(userDetailsFromStore);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProps>();

  const logout = () => {
    dispatch(exportObj.store.dispatch({type: 'RESET'}));
    navigation.reset({
      index: 0,
      routes: [{name: 'login'}],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomImageComponent
          defaultSource={ICONS.ic_noProfile}
          imageSource={userDetails?.image ?? ''}
          loaderSize={'small'}
          customStyle={styles.userImage}
        />
        <View style={styles.marginLeft}>
          <Text style={styles.userName}>{userDetails?.name ?? 'User'}</Text>
          <Text style={styles.welcomeText}>{STRINGS.welcome}</Text>
        </View>
      </View>
      <Pressable onPress={barcodePressHandler}>
        <Image
          style={styles.icon}
          resizeMode="contain"
          source={ICONS.ic_barcode}
        />
      </Pressable>
      <Pressable onPress={logout}>
        <Image
          style={styles.iconLogout}
          resizeMode="contain"
          source={ICONS.ic_logout}
        />
      </Pressable>
    </View>
  );
};

export default ProductsHeader;
