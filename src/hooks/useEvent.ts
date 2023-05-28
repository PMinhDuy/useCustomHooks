import { useEffect, useLayoutEffect, useRef } from "react";

export const useEvent = (
  type: string,
  handler: (event: Event) => void,
  el: HTMLElement | Window = window
) => {
  const savedHandler = useRef<(event: Event) => void>();

  useLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener = (e: Event) => savedHandler.current?.(e);

    el.addEventListener(type, listener);

    return () => {
      el.removeEventListener(type, listener);
    };
  }, [type, el]);
};
