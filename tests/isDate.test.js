const expect = require('chai').expect;
const isDate = require('../isDate');

describe("isDate", function() {
    it("String returns false", function() {
        expect(isDate('asd')).to.equal(false)
    });
});