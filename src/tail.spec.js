const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3] is 1', () => {
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of [1,2,3] is undefined', () => {
        expect(tail([])).toEqual([]);
    });

})