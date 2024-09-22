import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { useEffect, useRef, useState } from 'react';
import {
  selectTodos,
  selectTodosCount,
  selectTodosLoading,
} from '../../selectors';
import { addTodo, deleteTodo } from '../../todosSlice';
import type { TodoItemEntity } from '../../types';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
} from '../../todoApiSlice';

export const useTodosPage = () => {
  const todoListRef = useRef<HTMLDivElement>(null);
  const { data: todos, isFetching: todosLoading, refetch } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  // const todosCount = useAppSelector(selectTodosCount);
  // const [needScroll, setNeedScroll] = useState(false);

  const addTodoHandler = async (item: TodoItemEntity) => {
    await addTodo(item);
    // setNeedScroll(true);
  };
  const deleteTodoHandler = async (id: string) => {
    await deleteTodo(id);
  };
  // useEffect(() => {
  //   if (needScroll && todosCount > 7 && todoListRef.current) {
  //     todoListRef.current.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     });
  //     setNeedScroll(false);
  //   }
  // }, [todosCount, needScroll]);
  return {
    todos,
    todosLoading,
    todoListRef,
    refetch,
    addTodoHandler,
    deleteTodoHandler,
  };
};
