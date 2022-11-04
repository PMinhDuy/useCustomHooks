import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useDidUpdate = (effect: EffectCallback, deps: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) effect();
    else didMount.current = true;
  }, deps);
};
