import {Alert, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomImageComponent from '../../../../components/CustomImageComponent';
import {ICONS} from '../../../../assets/iconExpoter';
import {useSelector} from 'react-redux';
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

const ProductsHeader: React.FC<IProductsHeaderProps> = ({
  barcodePressHandler,
}) => {
  const userDetails = useSelector(userDetailsFromStore);

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
      <Image
        style={styles.iconLogout}
        resizeMode="contain"
        source={ICONS.ic_logout}
      />
    </View>
  );
};

export default ProductsHeader;
