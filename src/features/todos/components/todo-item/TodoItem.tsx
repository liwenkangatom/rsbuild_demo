import Reduce from '@asserts/svgs/reduce.svg';
import Loading from '@asserts/svgs/loading.svg';
import { useState } from 'react';
export type TodoItemPropsType = {
  text?: string;
  onDelete?: () => Promise<void>;
};
export const TodoItem = (props: TodoItemPropsType) => {
  const { text, onDelete } = props;
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div className="  relative snap-start  flex flex-row w-full content-center shadow-md  border border-purple-400 rounded-lg p-2 bg-purple-100 text-gray-600   ">
      <div className=" text-center mr-2 text-white align-middle border bg-white border-purple-600 rounded-full size-6 " />
      <div className="  text-gray-400 align-baseline">{text}</div>
      <Reduce
        onClick={async () => {
          setIsDeleting(true);
          !!onDelete && (await onDelete());
          setIsDeleting(false);
        }}
        className="hover:scale-150 hover:translate-x-2 hover:-translate-y-2 active:scale-125 transition-transform fill-purple-900 bg-purple-100 shadow-md size-4 rounded-full right-0 top-0 absolute cursor-pointer"
      />
      {isDeleting && (
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
