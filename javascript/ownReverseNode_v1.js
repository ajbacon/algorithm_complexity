'use strict';
const getRunTime = require('./timerNode');

const ownReverse = (arr) => {
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

const runTime = (inResolution = 50000, inMax = 1000000) => {
  const resolution = inResolution;
  const max = inMax;
  for (let elms = resolution; elms <= max; elms += resolution) {
    let arr = Array.from(new Array(elms), (x, i) => i + 1);
    getRunTime(arr, ownReverse);
  }
};

runTime(5000, 200000);
