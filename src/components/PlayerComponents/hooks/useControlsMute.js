import {useState} from 'react';
import {useSelector} from "react-redux";
import {selectMute} from "../../slices/playerSlice";
import {initialState} from "../../slices/model";

export function useControlsMute(initial = initialState.player.mute) {
    const [muted, setMuted] = useState(initial);

    const mute = useSelector(selectMute);

    mute.then((result) => {
        if(result !== muted) {
            setMuted(prevState => !prevState);
        }
    });

    return muted;
}