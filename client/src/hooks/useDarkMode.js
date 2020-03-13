import React, {useEffect} from 'react';
import {useLocal} from './useLocal';

export function useDarkMode(key, init) {

    const [storedVal, setVal] = useLocal(key, init);
    const body = document.querySelector('body');

    useEffect(() => {

        if(storedVal) {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }

    }, [storedVal]);

    return [storedVal, setVal];
}