import {ICartProduct} from '../../../../state/slices/cart/types';
import {IProduct} from '../../../../state/slices/products/types';

export interface ICheckoutProductCard {
  product: ICartProduct;
}
