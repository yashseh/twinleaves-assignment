import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICartInitialState, ICartProduct} from './types';
import {RootState} from '../../store';
import {Alert} from 'react-native';

//cartSlice initialState
const initialState: ICartInitialState = {
  cartProducts: [],
  cartTotal: 0,
};

//Cart slice
export const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //add product to cart and update quantity if product is already in cart
    addProductToCart: (state, action: PayloadAction<ICartProduct>) => {
      const {gtin, mrp} = action.payload;
      const existingProductIndex = state.cartProducts.findIndex(
        product => product.gtin === gtin,
      );
      const newCartProducts = [...state.cartProducts];
      let newCartTotal = state.cartTotal;
      if (existingProductIndex !== -1) {
        newCartProducts[existingProductIndex] = action.payload;
      } else {
        newCartProducts.push(action.payload);
      }

      if (mrp && mrp.mrp) {
        newCartTotal += mrp.mrp;
      }

      state.cartProducts = newCartProducts;
      state.cartTotal = newCartTotal;
    },
    // remove the cart
    removeCart: state => {
      state.cartProducts = [];
      state.cartTotal = 0;
    },
    //remove product from cart and decreases quantity if product is already in cart
    removeProductFromCart: (state, action: PayloadAction<ICartProduct>) => {
      const {gtin, mrp} = action.payload;
      const existingProductIndex = state.cartProducts.findIndex(
        product => product.gtin === gtin,
      );
      const newCartProducts = [...state.cartProducts];
      let newCartTotal = state.cartTotal;

      if (existingProductIndex !== -1) {
        if (action.payload.quantity === 0) {
          newCartProducts.splice(existingProductIndex, 1);
        } else {
          newCartProducts[existingProductIndex] = action.payload;
        }
      }
      if (mrp && mrp.mrp) {
        newCartTotal -= mrp.mrp;
      }
      state.cartProducts = newCartProducts;
      state.cartTotal = newCartTotal;
    },
  },
});

//reducer exporter
export default cartSlice.reducer;

//actions
export const {addProductToCart, removeCart, removeProductFromCart} =
  cartSlice.actions;

//state extractors
export const cartProductsFromState = (state: RootState) =>
  state.cart.cartProducts;
export const cartTotalFromState = (state: RootState) => state.cart.cartTotal;
