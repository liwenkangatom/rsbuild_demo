import { Button } from '@/shared/components/button/Button';
import { usePetItem } from './usePetItem';
export type PetItemPropsType = {
  name?: string;
  id?: string;
  category?: string;
};
export const PetItem = (props: PetItemPropsType) => {
  const { name = 'Pet', id, category } = props;
  const { petTitle, addPet, reducePet } = usePetItem({ name });

  return (
    <div className=" text-md text-white rounded-sm border-purple-400 bg-slate-400 px-4 py-2 shadow-lg text-center">
      {petTitle}
      <Button
        onAdd={() => {
          addPet();
        }}
        onReduce={() => {
          reducePet();
        }}
      />
    </div>
  );
};
