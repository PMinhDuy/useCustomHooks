import { useEffect } from "react";
export var useKeyPress = function (onKeyPress) {
    useEffect(function () {
        window.addEventListener("keypress", onKeyPress);
        return function () { return window.removeEventListener("keypress", onKeyPress); };
    }, [onKeyPress]);
};
