'use strict';
const getRunTime = require('../timerNode');

const ownSort = (arr) => {
  function swap(arr, leftIndex, rightIndex) {
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }
  function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    return i;
  }

  function quickSort(arr, left = 0, right = arr.length - 1) {
    var index;
    if (arr.length > 1) {
      index = partition(arr, left, right);
      if (left < index - 1) {
        quickSort(arr, left, index - 1);
      }
      if (index < right) {
        quickSort(arr, index, right);
      }
    }
    return arr;
  }
  return quickSort(arr);
};

const runTime = (inResolution = 50000, inMax = 1000000) => {
  const resolution = inResolution;
  const max = inMax;
  for (let elms = resolution; elms <= max; elms += resolution) {
    let arr = Array.from(new Array(elms), (x, i) => i + 1);
    getRunTime(arr, ownSort);
  }
};

runTime(5000, 200000);

// console.log(ownSort([4, 3, 2, 1]));
