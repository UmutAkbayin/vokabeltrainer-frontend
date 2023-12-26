import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';
import type { Vocabulary } from '@/features/vocabularies/vocabulariesSlice';

// Define a type for the slice state
export interface VocabularyState {
  value: Vocabulary;
}

// Define the initial state using that type
const initialState: VocabularyState = {
  value: {
    id: '',
    englishVocabulary: '',
    germanVocabularies: [],
    step: 0,
  },
};

export const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setVocabulary: (state, action: PayloadAction<Vocabulary>) => {
      state.value = action.payload;
    }
  }
});

export const { setVocabulary } = vocabularySlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectVocabulary = (state: RootState) => state.vocabulary.value;
export default vocabularySlice.reducer;