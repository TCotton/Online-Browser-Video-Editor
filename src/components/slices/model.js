export const initialState = {
    audio: {
        peakFrequencyLeft: 0,
        peakFrequencyRight: 0,
    },
    files: {
        file: {
            lastModified: null,
            name: null,
            size: null,
            type: null,
        }
    },
    images: {
        iArray: [],
    },
    loader: {
        display: false,
    },
    player: {
        play: true,
        stop: false,
        forward: false,
        backward: false,
        mute: false,
    },
    video: {
        duration: 0,
        time: 0,
        el: false,
    },
    waveform: {
        data: {
            min_array: [0],
            max_array: [0],
            length: 0,
        }
    }
}