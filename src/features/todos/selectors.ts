import type { RootState } from '@/app/store';
import { createSelector } from '@reduxjs/toolkit';

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectTodosLoading = (state: RootState) => state.todos.loading;
export const selectTodosCount = createSelector(
  selectTodos,
  (todos) => todos.length,
);
