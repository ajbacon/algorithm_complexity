const customSelectionSort = require('../algorithms/customSelectionSort');

describe('customSelectionSort', () => {
  test('should return an empty array if passed an empty array', () => {
    const arr = [];

    expect(customSelectionSort(arr)).toEqual([]);
  });

  test('should return the same array if array length of 1', () => {
    const arr = [1];

    expect(customSelectionSort(arr)).toEqual([1]);
  });

  test('should correctly sort a shuffled array of 2 elements', () => {
    const arr = [2, 1];

    expect(customSelectionSort(arr)).toEqual([1, 2]);
  });

  test('should correctly sort a shuffled array of 3 elements', () => {
    const arr = [2, 1, 3];

    expect(customSelectionSort(arr)).toEqual([1, 2, 3]);
  });

  test('should correctly sort a shuffled array of 20 elements', () => {
    const arr = [
      2,
      11,
      17,
      16,
      14,
      19,
      15,
      9,
      12,
      5,
      1,
      18,
      4,
      20,
      7,
      3,
      8,
      10,
      13,
      6,
    ];

    expect(customSelectionSort(arr)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });

  test('should correctly sort an already sorted array of 20 elements', () => {
    const arr = [
      2,
      11,
      17,
      16,
      14,
      19,
      15,
      9,
      12,
      5,
      1,
      18,
      4,
      20,
      7,
      3,
      8,
      10,
      13,
      6,
    ];

    expect(customSelectionSort(arr)).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ]);
  });
});
