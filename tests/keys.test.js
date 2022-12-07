import { expect } from "chai";
import keys from "../keys.js";

describe("keys", function() {
    it("should return the keys of an array", () => {
        expect(keys(['', '', ''])).to.deep.equal(['0','1','2']);
        expect(keys([4, 3])).to.deep.equal(['0','1']);
        expect(keys(new Array("array object"))).to.deep.equal(['0']);
    });

    it("should return the keys of a string", () => {
        expect(keys('hello')).to.deep.equal(['0','1','2','3','4']);
        expect(keys(new String('hi'))).to.deep.equal(['0','1']);
    });

    it("should return the keys of an object", () => {
        function Foo() {
            this.a = 1
            this.b = 2
            this.cat = 'meow'
        }
        expect(keys(new Foo)).to.deep.equal(['a', 'b', 'cat']);
    });

    it("should return an empty array if given an object with no keys", () => {
        expect(keys(2)).to.deep.equal([]);
    });

    it("should return an empty array if given an empty or null argument", () => {
        expect(keys(null)).to.deep.equal([]);
        expect(keys()).to.deep.equal([]);
    });
});