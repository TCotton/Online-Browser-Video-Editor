import {useState} from 'react';
import {useSelector} from "react-redux";
import {selectBackward} from "../../slices/playerSlice";

export function useControlsBackward() {
    const [backwards, setBackwards] = useState(false);
    const back = useSelector(selectBackward);

    back.then((result) => {
        if (result !== backwards) {
            setBackwards(prevState => !prevState);
        }
    });

    return backwards;
}