import {IProduct} from '../../state/slices/products/types';

export interface IProductDetailsParams {
  route: {
    params: {
      gtin?: number | null;
      product?: IProduct | null;
    };
  };
}
