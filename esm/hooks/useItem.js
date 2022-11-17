import { useState } from "react";
export var useItem = function () {
    var _a = useState(null), selectItem = _a[0], setSelectItem = _a[1];
    var onCreate = function () {
        setSelectItem({});
    };
    var onCancel = function () {
        setSelectItem(null);
    };
    return { onCancel: onCancel, onCreate: onCreate, selectItem: selectItem, setSelectItem: setSelectItem };
};
