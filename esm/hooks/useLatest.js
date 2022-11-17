import { useRef } from "react";
export var useLatest = function (value) {
    var ref = useRef(value);
    ref.current = value;
    return ref;
};
