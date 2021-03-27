import {useState} from 'react';
import {useSelector} from "react-redux";
import {selectPlay} from "../../slices/playerSlice";
import {initialState} from "../../slices/model";

export function useControlsPlay() {
    const [play, setPlay] = useState(initialState.player.play);
    const ply = useSelector(selectPlay);

    ply.then((result) => {
        if(result !== play) {
            setPlay(prevState => !prevState);
        }
    });

    return play;
}