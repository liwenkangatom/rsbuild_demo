import { nanoid } from '@reduxjs/toolkit';
import Add from '@asserts/svgs/add.svg'
import { useForm, type SubmitHandler } from "react-hook-form"
import type { TodoItemEntity } from '../../types';
import { object, string, type InferType } from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

export type AddTodoPropsType = {
  onAddTodo?: (todo: TodoItemEntity) => void;
  placeholder?: string;
};
const schema =
  object({
    todoText: string().required()
  })

export const AddTodo = (props: AddTodoPropsType) => {
  const { onAddTodo, placeholder = "Add todo here" } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = handleSubmit((data) => {
    !!onAddTodo && onAddTodo({
      id: nanoid(),
      text: data.todoText
    })
    reset()
  })

  return (
    <form onSubmit={onSubmit} className=" relative p-2 shadow-md bg-purple-100 flex flex-row rounded-md border  border-purple-400">
      {errors.todoText && <span className='absolute -top-6 left-0 text-sm text-red-400'>{errors.todoText.message}</span>}
      <input {...register("todoText")} className=' block outline-none mr-2 w-full focus:shadow-md rounded-md border-0 pl-4 py-a pr-2 text-purple-800  placeholder:text-gray-400 ' />
      <button type='submit' className=' rounded-full size-6' >
        <Add className=' hover:scale-150 active:scale-125 transition-transform size-6 fill-purple-900 shadow-sm rounded-full' />
      </button>
    </form>
  );
};
