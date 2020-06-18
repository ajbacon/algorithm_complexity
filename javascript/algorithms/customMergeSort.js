'use strict';
const customMergeSort = (arr) => {
  mergeSortRec(arr, 0, arr.length - 1);
  return arr;
};

const mergeSortRec = (arr, first, last) => {
  if (first < last) {
    const middle = Math.floor((first + last) / 2);
    mergeSortRec(arr, first, middle);
    mergeSortRec(arr, middle + 1, last);
    merge(arr, first, middle, last);
  }
};

const merge = (arr, first, mid, last) => {
  const L = arr.slice(first, mid + 1);
  const R = arr.slice(mid + 1, last + 1);

  let i = 0;
  let j = 0;
  const iMax = L.length;
  const jMax = R.length;

  for (let k = first; k <= last; k++) {
    if (i == iMax) {
      arr[k] = R[j];
      j++;
    } else if (j == jMax) {
      arr[k] = L[i];
      i++;
    } else if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
  }
};

module.exports = customMergeSort;
