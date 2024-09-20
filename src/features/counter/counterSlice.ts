import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
  selectors: {
    selectCounter: (state) => state.value,
  },
});
export const { incremented, decremented } = counterSlice.actions;
export const { selectCounter } = counterSlice.selectors;
