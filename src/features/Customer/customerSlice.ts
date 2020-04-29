/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllUsers } from '../../services/users';
import { AppThunk, AppDispatch } from '../../app/store';

export type Customer = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

interface ICustomers {
  isLoading: boolean;
  error: string | null;
  items: Customer[];
  current: Customer | undefined;
}

const customerInitialState: ICustomers = {
  isLoading: false,
  error: null,
  items: [],
  current: undefined,
};

const customerSlice = createSlice({
  name: 'customer',
  initialState: customerInitialState,
  reducers: {
    getAllCustomersStart: (state: ICustomers) => {
      state.isLoading = true;
    },
    getAllCustomersSuccess: (state: ICustomers, action: PayloadAction<[]>) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    getAllCustomersFailure: (
      state: ICustomers,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCurrentCustomer: (state: ICustomers, action: PayloadAction<string>) => {
      const found = state.items.find((current) => {
        return current.id.toString() === action.payload.toString();
      });
      state.current = found;
    },
  },
});

export const {
  getAllCustomersStart,
  getAllCustomersSuccess,
  getAllCustomersFailure,
  setCurrentCustomer,
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

export const selectCurrentCustomer = (userId: string) => (
  dispatch: AppDispatch
) => {
  dispatch(setCurrentCustomer(userId));
};

export default customerSlice.reducer;
export type CustomersState = ReturnType<typeof customerSlice.reducer>;
