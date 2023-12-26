import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store';

export interface StatusState {
  value: 'off' | 'on';
}

const initialState: StatusState = {
  value: 'off',
};

export const statusSlice = createSlice({
  name: 'status',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<'off' | 'on'>) => {
      state.value = action.payload;
    }
  }
});

export const { setStatus } = statusSlice.actions;
export const selectStatus = (state: RootState) => state.status.value;
export default statusSlice.reducer;