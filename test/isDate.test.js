import { expect } from "chai";
import isDate from "../isDate.js";

describe("isDate", function() {
    it("should return true if the argument is a Date", () => {
        expect(isDate(new Date('6-12-2022'))).to.be.true
    });

    it("should return true if the argument is an empty Date", () => {
        expect(isDate(new Date())).to.be.true
    });

    it("should return false if the argument is a String", () => {
        expect(isDate(new String())).to.be.false
    });

    it("should return false if the argument is an Object", () => {
        expect(isDate(new Object())).to.be.false
    });

    it("should return false if given an empty argument", () => {
        expect(isDate()).to.be.false
    });

    it("should return false if given null as an argument", () => {
        expect(isDate(null)).to.be.false
    });
});