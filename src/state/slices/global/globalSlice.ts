import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {RootState} from '../../store';
import {IGlobalSliceInitialState} from './type';

//globalSlice initialState
const initialState: IGlobalSliceInitialState = {
  displayLoader: false,
};

//Global slice
export const globalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // update Loader state
    displayLoader: (state, action: PayloadAction<boolean>) => {
      console.log('===================action=================');
      console.log(action.payload, '------');
      console.log('====================================');
      state.displayLoader = action.payload;
    },
  },
});

//reducer exporter
export default globalSlice.reducer;

//actions
export const {displayLoader} = globalSlice.actions;

//state extractors
export const currentLoadingState = (state: RootState) =>
  state.global.displayLoader;
