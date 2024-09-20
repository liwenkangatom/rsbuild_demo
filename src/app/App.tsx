import './App.css';
import { incremented, selectCounter } from '@features/counter/counterSlice';
import { useGetPostQuery } from '@features/posts/postsApiSlice';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

const App = () => {
  const id = 'hello';
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();
  const { data: post, isFetching, isLoading } = useGetPostQuery(id);
  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Missing post!</div>;
  return (
    <div className=" content-center w-full h-dvh bg-purple-400 p-6">
      <button
        type="button"
        className=" rounded-sm border-purple-300 bg-slate-400"
        onClick={() => {
          dispatch(incremented());
        }}
      >
        ADD
      </button>
      <h1 className=" text-3xl text-white">Rsbuild with React {counter}</h1>
      <p className=" text-sm underline">
        {post.name} {isFetching ? '...refetching' : ''}
      </p>
    </div>
  );
};

export default App;
