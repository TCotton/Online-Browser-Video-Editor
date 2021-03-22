import {toMinutesAndSeconds, changeExt} from '../index'

describe('toMinutesAndSeconds', () => {
    it('should return a string', function () {
        const result = toMinutesAndSeconds('9');
        expect(typeof result === 'string').toBe(true);
    });
    it('should return a "0:05.72"', function () {
        const result = toMinutesAndSeconds('5.717914');
        expect(result).toBe("0:05.72");
    });
});

describe('changeExt', () => {
    it('should return a string', function () {
        const result = changeExt('here.txt', 'mp4');
        expect(typeof result === 'string').toBe(true);
    });
    it('should return "here.mp4"', function () {
        const result = changeExt('here.txt', 'mp4');
        expect(result).toBe("here.mp4");
    });
});