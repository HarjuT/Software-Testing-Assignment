import { expect } from "chai";
import toString from "../toString.js";

describe("toString", function() {
    it("should return the string value of a number, string, boolean or symbol", () => {
        expect(toString(2)).to.deep.equal('2');
        expect(toString(-2)).to.deep.equal('-2');
        expect(toString(2.5)).to.deep.equal('2.5');
        expect(toString(2/2)).to.deep.equal('1');
        expect(toString('cat')).to.deep.equal('cat');
        expect(toString('')).to.deep.equal('');
        expect(toString(true)).to.deep.equal('true');
        expect(toString(Symbol('hello'))).to.deep.equal('Symbol(hello)');
    });

    it("should return the string value of an array", () => {
        expect(toString([6, 9])).to.deep.equal('6,9');
        expect(toString([])).to.deep.equal('');
    });

    it("should return 'undefined' when argument is empty or undefined", () => {
        expect(toString()).to.deep.equal('undefined');
        expect(toString(undefined)).to.deep.equal('undefined');
    });

    it("should return 'null' when argument is null", () => {
        expect(toString(null)).to.deep.equal('null');
    });
});