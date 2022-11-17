/// <reference types="react" />
export declare const useItem: <T>() => {
    onCancel: () => void;
    onCreate: () => void;
    selectItem: T | null;
    setSelectItem: import("react").Dispatch<import("react").SetStateAction<T | null>>;
};
