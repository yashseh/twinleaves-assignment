import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {
  IFetchProductsApiBody,
  IFetchProductsApiResponse,
  IProductsInitialState,
} from './types';
import {postApiCall} from '../../../adapters/apiManager';
import {endpoints} from '../../../adapters/endpoinst';
import {ICustomizedErrorResponse} from '../../../adapters/types';
import {RootState} from '../../store';

const initialState: IProductsInitialState = {
  products: [],
  status: 'idle',
  totalPages: 0,
  error: null,
};

//fetch products
export const fetchProducts = createAsyncThunk(
  'fetchProducts',
  async (page: number) => {
    const body: IFetchProductsApiBody = {
      page: page,
      pageSize: 10,
      sort: {
        creationDateSortOption: 'DESC',
      },
    };

    return await postApiCall({url: endpoints.fetchProducts, data: body})
      .then((response: IFetchProductsApiResponse) => {
        return {
          products: response.products,
          currentPage: page,
          totalPages: response.totalPages,
          error: null,
        };
      })
      .catch((error: ICustomizedErrorResponse) => {
        return {
          products: [],
          error: error,
          totalPages: 0,
          currentPage: page,
        };
      });
  },
);

//products slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        let previousProducts =
          action.payload.currentPage === 1 ? [] : state.products;
        state.status = 'success';
        state.products = [...previousProducts, ...action.payload.products];
        state.error = action.payload.error;
        state.totalPages = action.payload.totalPages;
      });
  },
});

export default productsSlice.reducer;

//state extractors
export const productsFromState = (state: RootState) => state.products.products;
export const productsFetchingState = (state: RootState) =>
  state.products.status;
export const productsTotalPages = (state: RootState) =>
  state.products.totalPages;
export const productsErrorFromState = (state: RootState) =>
  state.products.error;
