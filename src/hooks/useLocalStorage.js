import { useState, useEffect } from "react";

function getStorageItem(storageKey, initialValue) {
    const savedItem = localStorage.getItem(storageKey);
    if (!savedItem) return initialValue;
    return savedItem;
}

export function useLocalStorage(storageKey, initialValue) {
    const [value, setValue] = useState(() => {
        return getStorageItem(storageKey, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(storageKey, value);
    }, [value]);

    return [value, setValue];
}