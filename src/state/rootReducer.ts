import {Reducer, combineReducers} from '@reduxjs/toolkit';
import userReducers from './slices/user/userSlice';
import globalReducers from './slices/global/globalSlice';
import productsSReducers from './slices/products/productsSlice';
import {IUserSliceInitialState} from './slices/user/types';
import {IGlobalSliceInitialState} from './slices/global/type';
import {IProductsInitialState} from './slices/products/types';

//reducer combiner
const combineReducer = combineReducers<IState>({
  user: userReducers,
  global: globalReducers,
  products: productsSReducers,
});

//state type definitions
export interface IState {
  user: Reducer<IUserSliceInitialState>;
  global: Reducer<IGlobalSliceInitialState>;
  products: Reducer<IProductsInitialState>;
}

// reducer with  dehydrating  state capabilities
const rootReducer = (state: any, action: {type: string}) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return combineReducer(state, action);
};
export default rootReducer;
