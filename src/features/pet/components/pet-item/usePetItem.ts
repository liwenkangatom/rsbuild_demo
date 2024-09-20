import { useCallback, useMemo, useState } from 'react';

export type UsePetItemPropsType = {
  // hook props type
  name: string;
  limit?: number;
};
export const usePetItem = (props: UsePetItemPropsType) => {
  const { name, limit = 1000 } = props;
  const [value, setValue] = useState(0);
  const petTitle = useMemo(() => `${name}_${value}`, [name, value]);
  const addPet = () => setValue((i) => (i < limit ? i + 1 : i));
  const reducePet = () => setValue((i) => (i < 1 ? 0 : i - 1));
  return { petTitle, addPet, reducePet };
};
