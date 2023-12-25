import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

// Define a type for the slice state
export interface AmountState {
  value: string;
}

// Define the initial state using that type
const initialState: AmountState = {
  value: "1",
};

export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAmount: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setAmount } = amountSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectAmount = (state: RootState) => state.amount.value;
export default amountSlice.reducer;