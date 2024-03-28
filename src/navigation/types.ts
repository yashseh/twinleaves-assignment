import {NavigationProp} from '@react-navigation/native';
import {IProduct} from '../state/slices/products/types';

//type of params which are required by the screen;
export type RootStackParamList = {
  login: undefined;
  products: undefined;
  productDetails: {
    gtin?: number;
    product?: IProduct;
  };
  splash: undefined;
};

export type NavigationProps = NavigationProp<RootStackParamList>;

//routes type definitions
type IScreenType = {
  login: 'login';
  products: 'products';
  productDetails: 'productDetails';
  splash: 'splash';
};

//routes name definitions
export const routNames: IScreenType = {
  login: 'login',
  productDetails: 'productDetails',
  products: 'products',
  splash: 'splash',
};
