import { configureStore } from '@reduxjs/toolkit';
import amountReducer from '@/features/amount/amountSlice';
import modeReducer from '@/features/mode/modeSlice';
import statusReducer from '@/features/status/statusSlice';
import vocabulariesReducer from '@/features/vocabularies/vocabulariesSlice';
import vocabularyReducer from '@/features/vocabulary/vocabularySlice';
import directionReducer from '@/features/direction/directionSlice';
import answerReducer from '@/features/answer/answerSlice';
import countReducer from '@/features/count/countSlice';

export const store = configureStore({
  reducer: {
    amount: amountReducer,
    mode: modeReducer,
    status: statusReducer,
    vocabularies: vocabulariesReducer,
    vocabulary: vocabularyReducer,
    direction: directionReducer,
    answer: answerReducer,
    count: countReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch