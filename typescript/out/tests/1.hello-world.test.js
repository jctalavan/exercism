"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1_hello_world_1 = require("../src/1.hello-world");
describe('Hello World', () => {
    it('says hello world', () => {
        let expected = 'Hello, World!';
        let actual = (0, _1_hello_world_1.hello)();
        expect(actual).toEqual(expected);
    });
});
//# sourceMappingURL=1.hello-world.test.js.map