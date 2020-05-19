'use strict';
const getRunTime = require('../timerNode');

const exampleReverse = (arr) => {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr.unshift(arr[i]);
  }
  return new_arr;
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
