const customReverse1 = require('../algorithms/customReverseNode_v1');

describe('customReverse1', () => {
  test('should return an empty array if passed an empty array', () => {
    const arr = [];

    expect(customReverse1(arr)).toEqual([]);
  });

  test('should return the same array if array length of 1', () => {
    const arr = [1];

    expect(customReverse1(arr)).toEqual([1]);
  });

  test('should correctly reverse even number length array when length > 1', () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2, 3, 4];

    expect(customReverse1(arr1)).toEqual([2, 1]);
    expect(customReverse1(arr2)).toEqual([4, 3, 2, 1]);
  });

  test('should correctly reverse odd number length array when length > 1', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4, 5];

    expect(customReverse1(arr1)).toEqual([3, 2, 1]);
    expect(customReverse1(arr2)).toEqual([5, 4, 3, 2, 1]);
  });
});
