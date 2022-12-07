import { expect } from 'chai';

import eq from '../eq.js';

describe("eq", function() {
    it("should return true when values are equivalent", function() {
        expect(eq('test', 'test')).to.equal(true);
    });

    it("should return true when values are equivalent", function() {
        expect(eq(null, null)).to.equal(true);
    });

    it("should return false when values are not equivalent", function() {
        expect(eq({'test': 12}, {'test': 12})).to.equal(false);
    });

    it("should return true when values are not equivalent", function() {
        expect(eq('test', 12)).to.equal(false);
    });
});