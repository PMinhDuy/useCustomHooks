import { useLayoutEffect, useState } from "react";
export var useTheme = function (defaultValue) {
    if (defaultValue === void 0) { defaultValue = "light"; }
    var _a = useState(defaultValue), theme = _a[0], setThem = _a[1];
    useLayoutEffect(function () {
        document.body.dataset.theme = theme;
    }, [theme]);
    var toggleTheme = function () {
        setThem(function (theme) { return (theme === "light" ? "dark" : "light"); });
    };
    return { toggleTheme: toggleTheme };
};
