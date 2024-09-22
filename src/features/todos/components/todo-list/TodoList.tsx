import type { TodoItemEntity } from '../../types';
import { TodoItem } from '../todo-item/TodoItem';
import Loading from '@asserts/svgs/loading.svg';

export type TodoListPropsType = {
  // props type
  todoList?: TodoItemEntity[];
  isLoading?: boolean;
  onDeleteTodo?: (id: string) => Promise<void>;
};

export const TodoList = (props: TodoListPropsType) => {
  const { todoList, isLoading, onDeleteTodo } = props;

  return (
    <div className=" relative grid gap-3 min-h-6 p-4">
      {todoList?.map(({ id, text }) => (
        <TodoItem
          key={id}
          text={text}
          onDelete={async () => {
            !!onDeleteTodo && (await onDeleteTodo(id));
          }}
        />
      ))}
      {isLoading && (
        <>
          <div className=" absolute top-0 left-0 size-full bg-purple-950 bg-opacity-30  rounded-md" />
          <div className="absolute top-0 left-0 size-full flex justify-center items-center">
            <Loading className=" fill-purple-950 size-6 animate-spin" />
          </div>
        </>
      )}
    </div>
  );
};
