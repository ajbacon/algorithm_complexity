'use strict';

const jsReverse = (arr) => {
  return arr.reverse();
};

const runTime = (inResolution = 50000, inMax = 1000000) => {
  const resolution = inResolution;
  const max = inMax;
  for (let elms = resolution; elms <= max; elms += resolution) {
    let arr = Array.from(new Array(elms), (x, i) => i + 1);
    getRunTime(arr, jsReverse);
  }
};

// runTime();
runTime(5000, 100000);
