import { expect } from "chai";
import isDate from "../isDate.js";

describe("isDate", function() {
    it("should return false if the object is a String", function() {
        expect(isDate('asd')).to.be.false
    });
});