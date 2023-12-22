import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

// Define a type for the slice state
export interface AmountState {
  value: number,
}

// Define the initial state using that type
const initialState: AmountState = {
  value: 0
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    }
  }
});

export const { setAmount } = amountSlice.actions;

export default amountSlice.reducer;