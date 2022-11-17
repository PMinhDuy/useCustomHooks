import { useEffect, useState } from "react";
export var useClock = function () {
    var _a = useState(new Date()), time = _a[0], setTime = _a[1];
    useEffect(function () {
        var interval = setInterval(function () { return setTime(new Date()); }, 1000);
        return function () { return clearInterval(interval); };
    }, []);
    return { time: time };
};
