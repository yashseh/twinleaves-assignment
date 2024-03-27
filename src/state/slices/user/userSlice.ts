import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {IUser, IUserSliceInitialState} from './types';
import {RootState} from '../../store';

//user initialState
const initialState: IUserSliceInitialState = {
  user: null,
};

//user slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // user details updater
    updateUserDetails: (state, action: PayloadAction<IUser>) => {
      let currentUserState = state.user;
      state.user = {...currentUserState, ...action.payload};
    },
  },
});

//reducer exporter
export default userSlice.reducer;

//actions
export const {updateUserDetails} = userSlice.actions;

//state extractors
export const userDetailsFromStore = (state: RootState) => state.user.user;
