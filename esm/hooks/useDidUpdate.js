import { useEffect, useRef } from "react";
export var useDidUpdate = function (effect, deps) {
    var didMount = useRef(false);
    useEffect(function () {
        if (didMount.current)
            effect();
        else
            didMount.current = true;
    }, deps);
};
