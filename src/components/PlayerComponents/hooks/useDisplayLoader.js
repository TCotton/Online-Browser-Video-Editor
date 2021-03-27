import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {window} from "browser-monads"
import {displayFn, displayLoader} from "../../slices/loaderSlice";

export function useDisplayLoader() {
    const dispatch = useDispatch();
    const display = useSelector(displayLoader);

    const handlers = React.useMemo(() => {
        const sT = window.setTimeout(() => {
            dispatch(displayFn(false));
        }, 300)
        return () => {
            window.clearTimeout(sT);
        }
    }, [display]);

    return [handlers]
}