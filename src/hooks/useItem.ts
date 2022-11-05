import { useState } from "react";

export const useItem = <T>() => {
  const [selectItem, setSelectItem] = useState<T | null>(null);

  const onCreate = () => {
    setSelectItem({} as T);
  };

  const onCancel = () => {
    setSelectItem(null);
  };

  return { onCancel, onCreate, selectItem, setSelectItem };
};
