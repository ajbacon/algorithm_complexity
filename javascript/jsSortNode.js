'use strict';
const getRunTime = require('./timerNode');

const jsSort = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

const runTime = (inResolution = 50000, inMax = 1000000) => {
  const resolution = inResolution;
  const max = inMax;
  for (let elms = resolution; elms <= max; elms += resolution) {
    let arr = [];
    for (let i = elms; i > 0; i--) {
      arr.push(elms);
    }

    getRunTime(arr, jsSort);
  }
};

// runTime();
runTime(5000, 200000);
