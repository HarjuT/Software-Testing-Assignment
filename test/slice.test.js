import { expect } from "chai";
import slice from "../slice.js";

describe("slice", function() {
    it("should return the correct array when slicing at positive indexes inside the array bounds", () => {
        expect(slice(['cat', 'dog', 'hamster'], 1, 2)).to.deep.equal(['dog']);
        expect(slice(['car', 'bike', 'train', 'bus'], 2, 4)).to.deep.equal(['train', 'bus']);
        expect(slice([1], 0, 1)).to.deep.equal([1]);
    });

    it("should return the correct array when slicing at negative indexes inside the array bounds", () => {
        expect(slice(['cat', 'dog', 'hamster'], -2, -1)).to.deep.equal(['dog']);
        expect(slice(['car', 'bike', 'train', 'bus'], -3, -1)).to.deep.equal(['bike', 'train']);
    });

    it("should return the correct array when slicing from positive index to negative index inside array bounds", () => {
        expect(slice(['car', 'bike', 'train', 'bus'], 0, -1)).to.deep.equal(['car', 'bike', 'train']);
    });

    it("should return an array full of undefined values when slicing outside bounds", () => {
        expect(slice(['cat', 'dog', 'hamster'], 5, 7)).to.deep.equal([undefined, undefined]);
    });

    it("should return an empty array when starting point is greater than ending point", () => {
        expect(slice(['cat', 'dog', 'hamster'], 2, 1)).to.deep.equal([]);
    });

    it("should return the original array + undefined values when starting point is at the beginning and ending point greater than array length", () => {
        expect(slice(['cat', 'dog', 'hamster'], 0, 5)).to.deep.equal(['cat', 'dog', 'hamster', undefined, undefined]);
    });
});