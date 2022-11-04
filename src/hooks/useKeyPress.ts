import { useEffect } from "react";

export const useKeyPress = (onKeyPress: (event: KeyboardEvent) => void) => {
  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    return () => window.removeEventListener("keypress", onKeyPress);
  }, [onKeyPress]);
};
