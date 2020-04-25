/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllUsers } from '../../services/users';
import { AppThunk } from '../../app/store';

interface Customers {
  isLoading: boolean;
  error: string | null;
  items: [];
}

const customerInitialState: Customers = {
  isLoading: false,
  error: null,
  items: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: customerInitialState,
  reducers: {
    getAllCustomersStart: (state: Customers) => {
      state.isLoading = true;
    },
    getAllCustomersSuccess: (state: Customers, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    getAllCustomersFailure: (
      state: Customers,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const {
  getAllCustomersStart,
  getAllCustomersSuccess,
  getAllCustomersFailure,
} = customerSlice.actions;

export const fetchCustomers = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getAllCustomersStart());
    const customers = await getAllUsers();
    dispatch(getAllCustomersSuccess(customers.data));
  } catch (err) {
    dispatch(getAllCustomersFailure(err.toString()));
  }
};

export default customerSlice.reducer;
export type CustomersState = ReturnType<typeof customerSlice.reducer>;
