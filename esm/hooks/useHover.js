import { useEffect, useRef, useState } from "react";
export function useHover() {
    var _a = useState(false), value = _a[0], setValue = _a[1];
    var ref = useRef(null);
    var handleMouseOver = function () { return setValue(true); };
    var handleMouseOut = function () { return setValue(false); };
    useEffect(function () {
        var node = ref.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseOver);
            node.addEventListener("mouseout", handleMouseOut);
            return function () {
                node.removeEventListener("mouseover", handleMouseOver);
                node.removeEventListener("mouseout", handleMouseOut);
            };
        }
        return;
    }, []);
    return [ref, value];
}
