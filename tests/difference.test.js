import { expect } from 'chai';

import difference from '../difference.js';

describe("difference", function() {
    it("should return array", function() {
        const differenceArray = [1,2,3,4,5]
        let inputArray = [1,2,3,4,5]
        let outputArray = difference(inputArray, differenceArray)
        expect(outputArray).to.be.an('array')
    });

    it("should return empty array", function() {
        const differenceArray = [1,2,3,4,5]
        let inputArray = [1,2,3,4,5]
        let outputArray = difference(inputArray, differenceArray)
        expect(outputArray).to.be.empty
    });

    it("should return new array of filtered values", function() {
        const differenceArray = [4,7,1,9,11]
        let inputArray = [1,2,3,4,5,6,7,8,9,10,11]
        const referenceArray = [2,3,5,6,8,10]
        let outputArray = difference(inputArray, differenceArray)
        expect(outputArray).to.have.all.members(referenceArray)
    });

    it("should not return incorrect array of filtered values", function() {
        const differenceArray = [4,7,1,9,11]
        let inputArray = [1,2,3,4,5,6,7,8,9,10,11]
        const referenceArray = [2,3,5,6,8,10,11]
        let outputArray = difference(inputArray, differenceArray)
        expect(outputArray).to.not.have.all.members(referenceArray)
    });
});