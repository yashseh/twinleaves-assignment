import {Reducer, combineReducers} from '@reduxjs/toolkit';
import userReducers from './slices/user/userSlice';
import {IUserSliceInitialState} from './slices/user/types';

//reducer combiner
const combineReducer = combineReducers<RootState>({
  user: userReducers,
});

//state type definitions
export interface RootState {
  user: Reducer<IUserSliceInitialState>;
}

// reducer with  dehydrating  state capabilities
const rootReducer = (state: any, action: {type: string}) => {
  if (action.type === 'RESET') {
    state = undefined;
  }
  return combineReducer(state, action);
};
export default rootReducer;
