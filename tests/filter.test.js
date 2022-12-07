import { expect } from 'chai';

import filter from '../filter.js';

describe("filter", function() {
    it("should return empty nested array", function() {
        const users = []
        expect(filter(users, function(){})).to.eql([[]]);
    });

    it("should return true when values are equivalent", function() {
        
    });

    it("should return false when values are not equivalent", function() {
       
    });

    it("should return true when values are not equivalent", function() {
        
    });
});