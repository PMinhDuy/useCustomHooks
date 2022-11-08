import { useState } from "react";

export function useStickyState<T>(defaultValue: T, key: string) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  const changeState = (value: T) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [value, changeState];
}
