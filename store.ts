import { combineReducers, configureStore } from '@reduxjs/toolkit';
import amountReducer from '@/features/amount/amountSlice';
import modeReducer from '@/features/mode/modeSlice';
import statusReducer from '@/features/status/statusSlice';
import vocabulariesReducer from '@/features/vocabularies/vocabulariesSlice';
import vocabularyReducer from '@/features/vocabulary/vocabularySlice';
import directionReducer from '@/features/direction/directionSlice';
import answerReducer from '@/features/answer/answerSlice';
import countReducer from '@/features/count/countSlice';

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  amount: amountReducer,
  mode: modeReducer,
  status: statusReducer,
  vocabularies: vocabulariesReducer,
  vocabulary: vocabularyReducer,
  direction: directionReducer,
  answer: answerReducer,
  count: countReducer,
})

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
