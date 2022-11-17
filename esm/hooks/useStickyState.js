import { useState } from "react";
export function useStickyState(defaultValue, key) {
    var _a = useState(function () {
        var stickyValue = window.localStorage.getItem(key);
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    }), value = _a[0], setValue = _a[1];
    var changeState = function (value) {
        setValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [value, changeState];
}
