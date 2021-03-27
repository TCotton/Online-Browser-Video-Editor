import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {displayFn, displayLoader} from "../../slices/loaderSlice";

export function useDisplayLoader() {
    const dispatch = useDispatch();
    const display = useSelector(displayLoader);

    const handlers = React.useMemo(() => {
        dispatch(displayFn(false));
    },[display]);

    return [handlers]
}