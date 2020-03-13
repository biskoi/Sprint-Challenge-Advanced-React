import React, {useState} from 'react';

export function useLocal(key, init) {

    const [storedVal, setVal] = useState(() => {

        const local = window.localStorage;

        if(local.getItem(key)) {
            return (local.getItem(key));
        } else {
            return local.setItem(key, JSON.stringify(init));
        }
    });

    const setStoredVal = (val) => {
        setVal(val);
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    return [storedVal, setStoredVal];

}