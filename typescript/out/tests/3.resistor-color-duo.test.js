"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _3_resistor_color_duo_1 = require("../src/3.resistor-color-duo");
describe('Resistor Colors', () => {
    it('Brown and black', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['brown', 'black'])).toEqual(10);
    });
    xit('Blue and grey', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['blue', 'grey'])).toEqual(68);
    });
    xit('White and red', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['white', 'red'])).toEqual(92);
    });
    xit('Yellow and violet', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['yellow', 'violet'])).toEqual(47);
    });
    xit('Orange and orange', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['orange', 'orange'])).toEqual(33);
    });
    xit('Ignore additional colors', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['green', 'brown', 'orange'])).toEqual(51);
    });
    xit('Black and brown, one-digit', () => {
        expect((0, _3_resistor_color_duo_1.decodedValue)(['black', 'brown'])).toEqual(1);
    });
});
//# sourceMappingURL=3.resistor-color-duo.test.js.map