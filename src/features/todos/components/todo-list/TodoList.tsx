import type { TodoItemEntity } from '../../types';
import { TodoItem } from '../todo-item/TodoItem';

export type TodoListPropsType = {
  // props type
  todoList?: TodoItemEntity[]
  onDeleteTodo?: (id: string) => void;
};

export const TodoList = (props: TodoListPropsType) => {
  const { todoList, onDeleteTodo } = props;


  return (
    <div className=" grid gap-3">
      {todoList?.map(({ id, text }) => (<TodoItem key={id} text={text} onDelete={() => {
        !!onDeleteTodo && onDeleteTodo(id)
      }} />))}
    </div>
  );
};
