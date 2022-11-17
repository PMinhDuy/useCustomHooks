import { useCallback, useState } from "react";
export var useToggle = function (state) {
    var _a = useState(state), isVisible = _a[0], setIsVisible = _a[1];
    var onOpen = useCallback(function () {
        setIsVisible(true);
    }, []);
    var onClose = useCallback(function () {
        setIsVisible(false);
    }, []);
    var onToggle = useCallback(function () {
        setIsVisible(!isVisible);
    }, [isVisible]);
    return [isVisible, onOpen, onClose, onToggle];
};
