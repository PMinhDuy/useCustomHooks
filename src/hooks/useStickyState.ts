import { SetStateAction, useCallback, useState } from "react";

export function useStickyState<T>(defaultValue: T, key: string) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  const changeState = useCallback((state: SetStateAction<T>) => {
    const newValue = state instanceof Function ? state(value) : state
    setValue(newValue)
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }, [value]);

  return [value, changeState];
}
