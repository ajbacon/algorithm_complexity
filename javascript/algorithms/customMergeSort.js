const customMergeSort = (arr) => {
  mergeSortRec(arr, 0, arr.length - 1);
  return arr;
};

const mergeSortRec = (arr, first, last) => {
  if (first < last) {
    middle = Math.floor((first + last) / 2);
    mergeSortRec(arr, first, middle);
    mergeSortRec(arr, middle + 1, last);
    merge(arr, first, middle, last);
  }
};

const merge = (arr, first, middle, last) => {
  L = arr.slice(first, middle + 1);
  R = arr.slice(middle + 1, last + 1);
  // console.log(L);
  // console.log(R);

  let i = 0;
  let iMax = L.length;
  let j = 0;
  let jMax = R.length;

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

res = customMergeSort([2, 3, 1, 4]);
console.log(res);

// merge([2, 3, 1, 4], 0, 1, 3);

// [3, 2, 4, 1]

// def merge_sort(A):
//     merge_sort_rec(A, 0, len(A) - 1)

//     return A

// def merge_sort_rec(A, first, last):
//     if first < last:
//         middle = (first + last) // 2
//         merge_sort_rec(A, first, middle)
//         merge_sort_rec(A, middle + 1, last)
//         merge(A, first, middle, last)

// def merge(A, first, middle, last):
//     L = A[first:middle + 1]
//     R = A[middle + 1:last + 1]

//     i, i_max = 0, len(L)
//     j, j_max = 0, len(R)

//     for k in range(first, last + 1):
//         if i == i_max:
//             A[k] = R[j]
//             j += 1
//         elif j == j_max:
//             A[k] = L[i]
//             i += 1
//         elif (L[i] <= R[j]):
//             A[k] = L[i]
//             i += 1
//         else:
//             A[k] = R[j]
//             j += 1
