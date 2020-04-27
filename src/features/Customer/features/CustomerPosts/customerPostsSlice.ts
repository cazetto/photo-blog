/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserPosts } from '../../../../services/users';
import { AppThunk } from '../../../../app/store';

export type CustomerPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface ICustomerPosts {
  isLoading: boolean;
  error: string | null;
  items: CustomerPost[];
}

const customerPostsInitialState: ICustomerPosts = {
  isLoading: false,
  error: null,
  items: [],
};

const customerPostsSlice = createSlice({
  name: 'customerPosts',
  initialState: customerPostsInitialState,
  reducers: {
    getCustomerPostsStart: (state: ICustomerPosts) => {
      state.isLoading = true;
    },
    getCustomerPostsSuccess: (
      state: ICustomerPosts,
      action: PayloadAction<[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    getCustomerPostsFailure: (
      state: ICustomerPosts,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const {
  getCustomerPostsStart,
  getCustomerPostsSuccess,
  getCustomerPostsFailure,
} = customerPostsSlice.actions;

export const fetchCustomerPosts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getCustomerPostsStart());
    const customerPosts = await getUserPosts('1');
    dispatch(getCustomerPostsSuccess(customerPosts.data));
  } catch (err) {
    dispatch(getCustomerPostsFailure(err.toString()));
  }
};

export default customerPostsSlice.reducer;
export type CustomerPostsState = ReturnType<typeof customerPostsSlice.reducer>;
