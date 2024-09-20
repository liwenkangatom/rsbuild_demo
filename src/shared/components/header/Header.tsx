import { useHeader } from './useHeader';
export type HeaderPropsType = {
  // props type
};
export const Header = (props: HeaderPropsType) => {
  const {} = props;
  const {} = useHeader({});

  return (
    <div className=" w-5 h-5 bg-purple-100 text-black">Header Component</div>
  );
};
