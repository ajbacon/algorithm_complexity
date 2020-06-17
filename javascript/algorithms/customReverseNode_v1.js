'use strict';

const { showCompletionScript } = require('yargs');

const customReverse1 = (arr) => {
  let arrLength = arr.length;
  let midArr = Math.floor(arrLength / 2);

  for (let i = 0; i < midArr; i++) {
    let firstElm = i;
    let lastElm = arrLength - i - 1;

    [arr[firstElm], arr[lastElm]] = [arr[lastElm], arr[firstElm]];
  }
  return arr;
};

module.exports = customReverse1;
