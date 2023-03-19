"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _2_two_fer_1 = require("../src/2.two-fer");
describe('TwoFer', () => {
    it('no name given', () => {
        const expected = 'One for you, one for me.';
        expect((0, _2_two_fer_1.twoFer)()).toEqual(expected);
    });
    xit('a name given', () => {
        const expected = 'One for Alice, one for me.';
        expect((0, _2_two_fer_1.twoFer)('Alice')).toEqual(expected);
    });
    xit('another name given', () => {
        const expected = 'One for Bob, one for me.';
        expect((0, _2_two_fer_1.twoFer)('Bob')).toEqual(expected);
    });
});
//# sourceMappingURL=2.two-fer.test.js.map