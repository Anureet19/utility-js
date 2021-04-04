const min = require('./min');

describe('Min', () => {

    it('Min of [1,2,0] is 0', () => {
        expect(min([1,2,0],3)).toEqual(0);
    });

    it('Min of [] is undefined', () => {
        expect(min([],0)).toEqual(undefined);
    });

})