import { expect } from 'chai';

import get from '../get.js';

describe("get", function() {
    it("should return defaultvalue", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a.b.c', 'defaultvalue')).to.equal('defaultvalue')
    });

    it("should return 3", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0].b.c', 'defaultvalue')).to.equal(3)
    });

    it("should return the correct object", function() {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        expect(get(object, 'a[0]', 'defaultvalue')).to.eql({ b: { c: 3 } })
    });

    it("should return array", function() {
        const object = { 'a': [1,2,3,4] }
        expect(get(object, 'a', 'defaultvalue')).to.be.an('array')
    });
});