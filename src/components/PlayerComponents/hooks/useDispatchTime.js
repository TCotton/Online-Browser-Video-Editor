import React from 'react';
import {useDispatch} from "react-redux";
import {timeFn} from "../../slices/videoSlice";
import {initialState} from "../../slices/model";

export function useDispatchTime(time = initialState.video.time) {
    const dispatch = useDispatch();

    const handler = React.useMemo(() => {
        dispatch(timeFn(time))
    },[time]);

    return handler;
}