import { expect } from 'chai';

import filter from '../filter.js';

describe("filter", function() {
    it("should return empty nested array", function() {
        const users = []
        expect(filter(users, function(){})).to.eql([[]]);
    });

    it("should return array", function() {
        const users = 
        [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ active }) => active)).to.be.an('array')
    });

    it("should return array with the correct item", function() {
        const users = 
        [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ]
        expect(filter(users, ({ active }) => active)).to.have.deep.members([{ 'user': 'barney', 'active': true }])
    });

    it("should return array with the correct items", function() {
        const users = 
        [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false },
            { 'user': 'harry',  'active': true },
            { 'user': 'jack',   'active': true }
        ]
        expect(filter(users, ({ active }) => active)).to.have.deep.members(
            [
                { 'user': 'barney', 'active': true },
                { 'user': 'harry',  'active': true },
                { 'user': 'jack',   'active': true }
            ]
        )
    });
});