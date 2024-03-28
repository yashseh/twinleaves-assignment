import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  useCameraDevice,
  useCodeScanner,
  Camera,
} from 'react-native-vision-camera';
import {STRINGS} from '../../../../utils/strings';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../../navigation/types';
import {IBarcodeScanner} from './types';

const BrCodeScanner: React.FC<IBarcodeScanner> = ({
  closeCameraPopup,
  isActive,
}) => {
  const navigation = useNavigation<NavigationProps>();
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['code-128', 'code-39', 'code-93', 'codabar', 'ean-13', 'ean-8'],
    onCodeScanned: codes => {
      closeCameraPopup();
      setTimeout(() => {
        navigation.navigate('productDetails', {
          gtin: Number(codes[0].value),
        });
      }, 1000);
    },
  });

  if (device == null) return;
  return (
    <View style={StyleSheet.absoluteFill}>
      <Camera
        style={StyleSheet.absoluteFill}
        codeScanner={codeScanner}
        device={device}
        isActive={isActive}
      />
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={closeCameraPopup}>
        <Text style={styles.backButtonText}>{`<-${STRINGS.back}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BrCodeScanner;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 10,
    zIndex: 1,
    left: 10,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
