import { api } from '@features/api/apiSlice';
import type { TodoItemEntity } from './types';

const todosEndpoints = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TodoItemEntity[], void>({
      query: () => '/todos',
      providesTags: ['Todo'],
    }),
    addTodo: builder.mutation<TodoItemEntity, TodoItemEntity>({
      query: (todoItem) => ({
        url: '/todos',
        method: 'POST',
        body: todoItem,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todo'],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation } =
  todosEndpoints;
