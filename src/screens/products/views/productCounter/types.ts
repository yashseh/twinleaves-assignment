import {ICartProduct} from '../../../../state/slices/cart/types';
import {IProduct} from '../../../../state/slices/products/types';

export interface IProductCounterProps {
  product: IProduct;
}

export const getProductCount = (
  cartProducts: ICartProduct[],
  localProduct: IProduct,
) => {
  const product = cartProducts.find(
    product => product.gtin === localProduct.gtin,
  );
  return product ? product.quantity : 0;
};
