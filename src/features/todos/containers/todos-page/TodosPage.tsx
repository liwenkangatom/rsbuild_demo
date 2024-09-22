import { AddTodo } from '../../components/add-todo/AddTodo';
import { TodoList } from '../../components/todo-list/TodoList';
import { useTodosPage } from './useTodosPage';

export const TodosPage = () => {
  const {
    todos,
    todoListRef,
    addTodoHandler,
    deleteTodoHandler,
    todosLoading,
  } = useTodosPage();

  return (
    <div className=" h-svh w-full flex justify-center items-center content-center">
      <div className=" w-1/2 grid grid-cols-1 gap-6 p-6">
        <AddTodo onAddTodo={addTodoHandler} />
        <div
          ref={todoListRef}
          className=" relative w-full h-96 overflow-auto snap-y px-4"
        >
          <TodoList
            todoList={todos}
            isLoading={todosLoading}
            onDeleteTodo={deleteTodoHandler}
          />
        </div>
      </div>
    </div>
  );
};
