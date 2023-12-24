import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';


// Define a type for the slice state
export interface AnswerState {
  value: string;
}

// Define the initial state using that type
const initialState: AnswerState = {
  value: '',
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAnswer: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setAnswer } = answerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectAnswer = (state: RootState) => state.answer.value
export default answerSlice.reducer;