'use strict';

const customReverse1 = (arr) => {
  let output = arr;
  let arrLength = arr.length;
  let midArr = Math.floor(arrLength);

  for (let i = 0; i < midArr; i++) {
    let firstElm = i;
    let lastElm = arrLength - i - 1;

    [arr[firstElm], arr[lastElm]] = [arr[lastElm], arr[firstElm]];
  }
  return output;
};

module.exports = customReverse1;
