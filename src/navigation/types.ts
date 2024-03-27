import {NavigationProp} from '@react-navigation/native';

//type of params which are required by the screen;
export type RootStackParamList = {
  login: undefined;
  products: undefined;
  productDetails: undefined;
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
