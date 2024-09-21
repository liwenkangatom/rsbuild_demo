import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { TodoItemEntity } from './types';

interface TodoState {
  loading: boolean;
  todos: TodoItemEntity[];
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
  } satisfies TodoState as TodoState,
  reducers: (create) => ({
    deleteTodo: create.reducer<string>((state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index > -1) {
        state.todos.splice(index, 1);
      }
    }),
    addTodo: create.preparedReducer(
      (text: string) => {
        const id = nanoid();
        return { payload: { id, text } };
      },
      // action type is inferred from prepare callback
      (state, action) => {
        state.todos.unshift(action.payload);
      },
    ),
  }),
});
export const { deleteTodo, addTodo } = todosSlice.actions;
