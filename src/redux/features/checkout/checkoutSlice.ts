// src/features/checkout/checkoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface CheckoutState {
  name: string;
  email: string;
  phone: string;
  address: string;
  totalPrice: number
}

const initialState: CheckoutState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  totalPrice: 0,
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Partial<CheckoutState>>) => {
      return { ...state, ...action.payload };
    },
    clearFormData: () => initialState,
  },
});

export const { setFormData, clearFormData } = checkoutSlice.actions;

export const selectCheckoutForm = (state: RootState) => state.checkout;

export default checkoutSlice.reducer;
