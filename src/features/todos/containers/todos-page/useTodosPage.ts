import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { useEffect, useRef, useState } from 'react';
import {
  selectTodos,
  selectTodosCount,
  selectTodosLoading,
} from '../../selectors';
import { addTodo, deleteTodo } from '../../todosSlice';
import type { TodoItemEntity } from '../../types';

export const useTodosPage = () => {
  const todoListRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodos);
  const isLoading = useAppSelector(selectTodosLoading);
  const todosCount = useAppSelector(selectTodosCount);
  const [needScroll, setNeedScroll] = useState(false);

  const addTodoHandler = (item: TodoItemEntity) => {
    dispatch(addTodo(item.text));
    setNeedScroll(true);
  };
  const deleteTodoHandler = (id: string) => {
    dispatch(deleteTodo(id));
  };
  useEffect(() => {
    if (needScroll && todosCount > 7 && todoListRef.current) {
      todoListRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setNeedScroll(false);
    }
  }, [todosCount, needScroll]);
  return {
    todos,
    isLoading,
    todosCount,
    todoListRef,
    addTodoHandler,
    deleteTodoHandler,
  };
};
