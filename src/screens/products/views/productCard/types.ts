import {IProduct} from '../../../../state/slices/products/types';

export interface IProductCardPros {
  product: IProduct;
  onCardPress: () => void;
}
