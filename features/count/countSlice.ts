import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

// Define a type for the slice state
export interface CountState {
  value: number;
}

// Define the initial state using that type
const initialState: CountState = {
  value: 0,
};

export const countSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    resetCount: (state) => {
      state.value = 0;
    },
    incrementCount: (state) => {
      state.value += 1;
    }
  }
});

export const { resetCount, incrementCount } = countSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.count.value;
export default countSlice.reducer;