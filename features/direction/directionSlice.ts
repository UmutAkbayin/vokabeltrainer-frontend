import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

export type Direction = 'englishToGerman' | 'germanToEnglish' | 'mixed' | ''

// Define a type for the slice state
export interface DirectionState {
  value: Direction;
}

// Define the initial state using that type
const initialState: DirectionState = {
  value: '',
};

export const directionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setDirection: (state, action: PayloadAction<Direction>) => {
      state.value = action.payload;
    }
  }
});

export const { setDirection } = directionSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectDirection = (state: RootState) => state.direction.value
export default directionSlice.reducer;