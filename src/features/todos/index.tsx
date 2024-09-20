import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { useState } from 'react';
import { deleteTodo, selectLoading, selectTodosNumber } from './todosSlice';

const Todos = () => {
  const dispatch = useAppDispatch();
  const todoLength = useAppSelector(selectTodosNumber);
  const todos = useAppSelector((state) => state.todos.todos);

  const [input, setInput] = useState('');

  return (
    <div className=" w-5 h-5 bg-purple-100 text-black">
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div>
        {todos.map((todo, index) => (
          <span key={todo.id}>
            {todo.text}
            <button
              type="button"
              onClick={() => {
                dispatch(deleteTodo(index));
              }}
            >
              delete
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Todos;
