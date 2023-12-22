import { configureStore } from '@reduxjs/toolkit';
import amountReducer from '@/app/features/amount/amountSlice';
import modeReducer from '@/app/features/mode/modeSlice';
import statusReducer from '@/app/features/status/statusSlice';
import vocabularyReducer from '@/app/features/vocabularies/vocabulariesSlice';

export const store = configureStore({
  reducer: {
    amount: amountReducer,
    mode: modeReducer,
    status: statusReducer,
    vocabularies: vocabularyReducer,
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch