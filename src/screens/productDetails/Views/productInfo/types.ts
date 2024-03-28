import {IProduct} from '../../../../state/slices/products/types';

export type IProductInfoProps = {
  product: IProduct | null;
};

//determines weather to render quantity;
export const shouldRenderWeightAndMeasurement = (
  weight: number,
  unit: string,
) => {
  return weight > 0 && unit !== 'nos';
};
