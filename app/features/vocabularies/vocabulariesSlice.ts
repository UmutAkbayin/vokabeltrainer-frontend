import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export type Vocabulary = {
    id: string;
    englishVocabulary: string;
    germanVocabularies: string[];
    step: number;
}

export interface VocabulariesState {
  value: Vocabulary[];
}

const initialState: VocabulariesState = {
  value: [],
};

export const vocabulariesSlice = createSlice({
  name: 'vocabularies',
  initialState,
  reducers: {
    setVocabularies: (state, action: PayloadAction<Vocabulary[]>) => {
      state.value = action.payload?.map((voc) => {
        const newVoc = {
          ...voc,
          step: 0,
        };
        return newVoc;
      });
    },
    incrementVocabulary: (state, action: PayloadAction<string>) => {
      state.value = state.value.map((vocabulary) => {
        if (vocabulary.id === action.payload) {
          vocabulary.step += 1;
        }
        return vocabulary;
      });
    },
    resetVocabulary: (state, action: PayloadAction<string>) => {
      state.value = state.value.map((vocabulary) => {
        if (vocabulary.id === action.payload) {
          vocabulary.step = 0;
        }
        return vocabulary;
      });
    }, 
  }
});

export const { setVocabularies, incrementVocabulary, resetVocabulary } = vocabulariesSlice.actions;
export const selectVocabularies = (state: RootState) => state.vocabularies.value;
export default vocabulariesSlice.reducer;