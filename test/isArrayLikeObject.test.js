import { expect } from 'chai';

import isArrayLikeObject from '../isArrayLikeObject.js';

describe("isArrayLikeObject", function() {
    it("should return false when testing string", function() {
        expect(isArrayLikeObject('test')).to.be.false
    });

    it("should return false when testing function", function() {
        expect(isArrayLikeObject(function(){})).to.be.false
    });

    it("should return true when testing array", function() {
        expect(isArrayLikeObject([1,2,3])).to.be.true
    });

    it("should return true when testing nested object", function() {
        const document = {
            body: {
                children: []
            }
        }
        expect(isArrayLikeObject(document.body.children)).to.be.true
    });
});