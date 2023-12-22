import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

// Define a type for the slice state
export interface ModeState {
  value: string;
}

// Define the initial state using that type
const initialState: ModeState = {
  value: '',
};

export const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMode: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setMode } = modeSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectMode = (state: RootState) => state.mode.value
export default modeSlice.reducer;