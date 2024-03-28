import {ICustomizedErrorResponse} from '../../../adapters/types';

export interface IProductsInitialState {
  products: IProduct[];
  status: 'loading' | 'success' | 'idle';
  totalPages: number;
  error: null | ICustomizedErrorResponse;
}

export interface IProduct {
  name: string | null | undefined;
  gtin: number | null | undefined;
  company_detail:
    | {
        name: string | null | undefined;
      }
    | null
    | undefined;
  images: IProductImages | null | undefined;
  weights_and_measures: IProductWeightAndMeasures;
  description: string | null | undefined;
  mrp: {mrp: number | null | undefined} | null | undefined;
}

export type IProductWeightAndMeasures = {
  measurement_unit: string | null | undefined;
  gross_weight: number | null | undefined;
};

export type IProductImages = {
  front: null | undefined | string;
  back: null | undefined | string;
  top: null | undefined | string;
  bottom: null | undefined | string;
  left: null | undefined | string;
  right: null | undefined | string;
  top_left: null | undefined | string;
  top_right: null | undefined | string;
};

export type IFetchProductsApiResponse = {
  currentPage: number;
  currentPageResults: number;
  hitScore: null;
  products: IProduct[];
  totalPages: number;
};

export type IFetchProductsApiBody = {
  page: number;
  pageSize: 10;
  sort?: {
    creationDateSortOption: 'DESC';
  };
};
