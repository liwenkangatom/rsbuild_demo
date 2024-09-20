import { createSlice, nanoid } from '@reduxjs/toolkit';
interface Item {
  id: string;
  text: string;
}
interface TodoState {
  loading: boolean;
  todos: Item[];
}
export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    loading: false,
    todos: [],
  } satisfies TodoState as TodoState,
  reducers: (create) => ({
    deleteTodo: create.reducer<number>((state, action) => {
      state.todos.splice(action.payload, 1);
    }),
    addTodo: create.preparedReducer(
      (text: string) => {
        const id = nanoid();
        return { payload: { id, text } };
      },
      // action type is inferred from prepare callback
      (state, action) => {
        state.todos.push(action.payload);
      },
    ),
  }),
  selectors: {
    selectLoading: (state) => {
      return state.loading;
    },
    selectTodosNumber: (state) => {
      return state.todos.length;
    },
  },
});
export const { deleteTodo, addTodo } = todosSlice.actions;
export const { selectLoading, selectTodosNumber } = todosSlice.selectors;
