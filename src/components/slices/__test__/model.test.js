import {initialState} from '../model';

describe('initialState', () => {
    
    describe('initialState.audio', () => {
        it('should return correct types', function () {
            expect(initialState.audio.peakFrequencyLeft).toStrictEqual(0);
            expect(typeof initialState.audio.peakFrequencyLeft).toStrictEqual('number');
            expect(initialState.audio.peakFrequencyRight).toStrictEqual(0);
            expect(typeof initialState.audio.peakFrequencyRight).toStrictEqual('number');
        });
    })

    describe('initialState.files', () => {
        it('should return correct types', function () {
            expect(typeof initialState.files.file).toBe('object');

            expect(initialState.files.file.lastModified).toStrictEqual(null);
            expect(initialState.files.file.name).toStrictEqual(null);
            expect(initialState.files.file.size).toStrictEqual(null);
            expect(initialState.files.file.type).toStrictEqual(null);
        });
    })

    describe('initialState.images', () => {
        it('should return correct types', function () {
            expect(initialState.images.iArray).toStrictEqual([]);
            expect(typeof initialState.images.iArray).toBe('object');
        });
    })

    describe('initialState.loader', () => {
        it('should return correct types', function () {
            expect(initialState.loader.display).toStrictEqual(false);
            expect(typeof initialState.loader.display).toBe('boolean');
        });
    })

    describe('initialState.player', () => {
        it('should return correct types', function () {
            expect(initialState.player.play).toStrictEqual(true);
            expect(typeof initialState.player.play).toBe('boolean');
            expect(initialState.player.stop).toStrictEqual(false);
            expect(typeof initialState.player.play).toBe('boolean');
            expect(initialState.player.forward).toStrictEqual(false);
            expect(typeof initialState.player.forward).toBe('boolean');
            expect(initialState.player.backward).toStrictEqual(false);
            expect(typeof initialState.player.backward).toBe('boolean');
            expect(initialState.player.mute).toStrictEqual(false);
            expect(typeof initialState.player.mute).toBe('boolean');
        });
    })

    describe('initialState.video', () => {
        it('should return correct types', function () {
            expect(initialState.video.duration).toStrictEqual(0);
            expect(typeof initialState.video.duration).toBe('number');
            expect(initialState.video.time).toStrictEqual(0);
            expect(typeof initialState.video.time).toBe('number');
            expect(initialState.video.el).toStrictEqual(false);
            expect(typeof initialState.video.el).toBe('boolean');
        });
    })

    describe('initialState.waveform', () => {
        it('should return correct types', function () {
            expect(typeof initialState.waveform.data).toBe('object');
            expect(initialState.waveform.data.min_array).toStrictEqual([0]);
            expect(initialState.waveform.data.min_array).toStrictEqual([0]);
            expect(typeof initialState.waveform.data.min_array).toBe('object');
            expect(initialState.waveform.data.max_array).toStrictEqual([0]);
            expect(typeof initialState.waveform.data.max_array).toBe('object');
            expect(initialState.waveform.data.length).toStrictEqual(0);
            expect(typeof initialState.waveform.data.length).toBe('number');
        });
    })
});

