import {useState} from "react";
import {useSelector} from "react-redux";
import {selectForward} from "../../slices/playerSlice";

export function useControlsForward() {
    const [forward, setForward] = useState(false);

    const forwd = useSelector(selectForward);
    forwd.then((result) => {
        if(result !== forward) {
            setForward(prevState => !prevState);
        }
    });

    return forward;
}