import {useDispatch} from "react-redux";
import React from "react";
import {initialState} from "../../slices/model";
import {durationFn} from "../../slices/videoSlice";

export function useDispatchDuration(duration = initialState.video.duration) {
    const dispatch = useDispatch();

    const handlers = React.useMemo(() => {
        dispatch(durationFn(duration))
    },[duration]);

    return handlers;
}