import { expect } from "chai";
import isObject from "../isObject.js";

describe("isObject", function() {
    it("should return true if the argument is an Object", () => {
        expect(isObject(new Object())).to.be.true
    });

    it("should return true if the argument is a String", () => {
        expect(isObject(new String())).to.be.true
    });

    it("should return false if the argument is a primitive type", () => {
        expect(isObject('')).to.be.false
    });

    it("should return false if given an empty argument", () => {
        expect(isObject()).to.be.false
    });

    it("should return false if given null as an argument", () => {
        expect(isObject(null)).to.be.false
    });
});