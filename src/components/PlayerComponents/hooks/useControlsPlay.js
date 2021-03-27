import {useState} from 'react';
import {useSelector} from "react-redux";
import {selectPlay} from "../../slices/playerSlice";

export function useControlsPlay() {
    const [play, setPlay] = useState(true);
    const ply = useSelector(selectPlay);

    ply.then((result) => {
        if(result !== play) {
            setPlay(prevState => !prevState);
        }
    });

    return play;
}