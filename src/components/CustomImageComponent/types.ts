import {StyleProp} from 'react-native';
import {ResizeMode, ImageStyle} from 'react-native-fast-image';

export type ICustomImageComponentProps = {
  defaultSource: number | undefined;
  imageSource: string | null;
  customStyle: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
  loaderSize?: number | 'small' | 'large';
};

export type IImageComponentState = 'loading' | 'error' | 'success';
