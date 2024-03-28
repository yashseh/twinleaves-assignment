import {IProduct} from '../products/types';

export interface ICartInitialState {
  cartProducts: ICartProduct[];
  cartTotal: number;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
