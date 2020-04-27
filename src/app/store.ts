import { combineReducers } from 'redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import customerReducer from '../features/Customer/customerSlice';
import customerPhotosReducer from '../features/Customer/features/CustomerPhotos/customerPhotosSlice';
import customerPostsReducer from '../features/Customer/features/CustomerPosts/customerPostsSlice';

const rootReducer = combineReducers({
  customers: customerReducer,
  customerPhotos: customerPhotosReducer,
  customerPosts: customerPostsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
