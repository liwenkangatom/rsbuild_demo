import Reduce from '@asserts/svgs/reduce.svg';
export type TodoItemPropsType = {
  text?: string;
  onDelete?: () => void;
};
export const TodoItem = (props: TodoItemPropsType) => {
  const { text, onDelete } = props;

  return (
    <div className="  relative snap-start  flex flex-row w-full content-center shadow-md  border border-purple-400 rounded-lg p-2 bg-purple-100 text-gray-600   ">
      <div className=" text-center mr-2 text-white align-middle border bg-white border-purple-600 rounded-full size-6 " />
      <div className="  text-gray-400 align-baseline">{text}</div>
      <Reduce
        onClick={() => !!onDelete && onDelete()}
        className="hover:scale-150 hover:translate-x-2 hover:-translate-y-2 active:scale-125 transition-transform fill-purple-900 bg-purple-100 shadow-md size-4 rounded-full right-0 top-0 absolute cursor-pointer"
      />
    </div>
  );
};
