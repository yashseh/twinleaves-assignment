import {
  ActivityIndicator,
  Image,
  Platform,
  StyleProp,
  ImageStyle,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {ICustomImageComponentProps} from './types';

import {colors} from '../../assets/themes';
import {styles} from './styles';

const CustomImageComponent: React.FC<ICustomImageComponentProps> = ({
  customStyle,
  imageSource,
  resizeMode,
  defaultSource,
  loaderSize = 'large',
}) => {
  const [image, updateImage] = useState<string | null>(imageSource);
  const [processing, updateImageProcessing] = useState<boolean>(false);

  useEffect(() => {
    updateImage(imageSource);
  }, [imageSource]);

  const onLoadStart = () => {
    updateImageProcessing(true);
  };

  const onLoad = () => {
    updateImageProcessing(false);
  };

  const onLoadEnd = () => {
    updateImageProcessing(false);
  };

  const onError = () => {
    updateImageProcessing(false);
  };

  return (
    <View style={customStyle}>
      {Platform.OS === 'ios' ? (
        <Image
          style={customStyle as StyleProp<ImageStyle>}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onLoadEnd={onLoadEnd}
          resizeMode={resizeMode ?? 'cover'}
          defaultSource={defaultSource}
          onError={onError}
          source={image ? {uri: image, cache: 'force-cache'} : defaultSource}
        />
      ) : (
        <FastImage
          fallback={true}
          source={image ? {uri: image, cache: 'immutable'} : defaultSource}
          style={customStyle}
          resizeMode={resizeMode ?? 'cover'}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onLoadEnd={onLoadEnd}
          onError={onError}
          defaultSource={defaultSource}
        />
      )}
      {processing === true && (
        <View style={[customStyle, styles.imageContainer]}>
          <ActivityIndicator size={loaderSize} color={colors.dark_grey} />
        </View>
      )}
    </View>
  );
};

export default CustomImageComponent;
