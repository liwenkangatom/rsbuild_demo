import Add from '@asserts/svgs/add.svg';
import Reduce from '@asserts/svgs/reduce.svg';
export type ButtonPropsType = {
  // props type
  onAdd: () => void;
  onReduce: () => void;
};
export const Button = (props: ButtonPropsType) => {
  const { onAdd, onReduce } = props;

  return (
    <div className=" bg-purple-50 rounded-md p-4 ">
      <Add
        onClick={() => onAdd()}
        className=" fill-purple-300 bg-purple-200 size-20 rounded-md shadow-md active:scale-95 transition-transform cursor-pointer"
      />
      <Reduce
        onClick={() => onReduce()}
        className=" fill-purple-300 bg-purple-200 size-20  rounded-md shadow-md active:scale-95 transition-transform mt-2 cursor-pointer"
      />
    </div>
  );
};
