import { selectCounter } from '@/features/counter/counterSlice';
import { selectTodosNumber } from '@/features/todos/todosSlice';
import { createSelector } from '@reduxjs/toolkit/react';

export const selectAllNumber = createSelector(
  [selectTodosNumber, selectCounter],
  (todosNumber, counter) => {
    return todosNumber * counter;
  },
);
