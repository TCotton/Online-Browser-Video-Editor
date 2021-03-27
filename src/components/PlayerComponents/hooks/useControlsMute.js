import {useState} from 'react';
import {useSelector} from "react-redux";
import {selectMute} from "../../slices/playerSlice";

export function useControlsMute(initialState = false) {
    const [muted, setMuted] = useState(initialState);

    const mute = useSelector(selectMute);

    mute.then((result) => {
        if(result !== muted) {
            setMuted(prevState => !prevState);
        }
    });

    return muted;
}