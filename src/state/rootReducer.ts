import {Reducer, combineReducers} from '@reduxjs/toolkit';
import userReducers from './slices/user/userSlice';
import globalReducers from './slices/global/globalSlice';
import productsSReducers from './slices/products/productsSlice';
import {IUserSliceInitialState} from './slices/user/types';
import {IGlobalSliceInitialState} from './slices/global/type';
import {IProductsInitialState} from './slices/products/types';
import cartReducers from './slices/cart/cartSlice';
import {ICartInitialState} from './slices/cart/types';

//reducer combiner
const combineReducer = combineReducers<IState>({
  user: userReducers,
  global: globalReducers,
  products: productsSReducers,
  cart: cartReducers,
});

//state type definitions
export interface IState {
  user: Reducer<IUserSliceInitialState>;
  global: Reducer<IGlobalSliceInitialState>;
  products: Reducer<IProductsInitialState>;
  cart: Reducer<ICartInitialState>;
}

// reducer with  dehydrating  state capabilities
const rootReducer = (state: any, action: {type: string}) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return combineReducer(state, action);
};
export default rootReducer;
