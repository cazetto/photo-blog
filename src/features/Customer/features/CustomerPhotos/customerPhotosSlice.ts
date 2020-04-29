/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserPhotos } from '../../../../services/users';
import { AppThunk } from '../../../../app/store';

export type CustomerPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

interface ICustomerPhotos {
  isLoading: boolean;
  error: string | null;
  items: CustomerPhoto[];
}

const customerPhotosInitialState: ICustomerPhotos = {
  isLoading: false,
  error: null,
  items: [],
};

const customerPhotosSlice = createSlice({
  name: 'customerPhotos',
  initialState: customerPhotosInitialState,
  reducers: {
    getCustomerPhotosStart: (state: ICustomerPhotos) => {
      state.isLoading = true;
    },
    getCustomerPhotosSuccess: (
      state: ICustomerPhotos,
      action: PayloadAction<[]>
    ) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    getCustomerPhotosFailure: (
      state: ICustomerPhotos,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const {
  getCustomerPhotosStart,
  getCustomerPhotosSuccess,
  getCustomerPhotosFailure,
} = customerPhotosSlice.actions;

export const fetchCustomerPhotos = (customerId: number): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(getCustomerPhotosStart());
    const customerPhotos = await getUserPhotos(customerId);
    dispatch(getCustomerPhotosSuccess(customerPhotos.data));
  } catch (err) {
    dispatch(getCustomerPhotosFailure(err.toString()));
  }
};

export default customerPhotosSlice.reducer;
export type CustomerPhotosState = ReturnType<
  typeof customerPhotosSlice.reducer
>;
