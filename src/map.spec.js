const map = require('./map');

describe('Map', () => {

    it('Map of [1,2,3], cube is [1,8,27]', () => {
        expect(map([1,2,3],(value)=> { return value*value*value})).toEqual([1,8,27]);
    });

    it('Map of [], cube is []', () => {
        expect(map([],(value)=> { return value*value*value})).toEqual([]);
    });


})