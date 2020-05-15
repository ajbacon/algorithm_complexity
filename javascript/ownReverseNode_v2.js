const getRunTime = require('./timerNode');

const ownReverse2 = (arr) => {
  let output = [];
  while (arr.length > 0) {}
};

const runTime = (inResolution = 50000, inMax = 1000000) => {
  const resolution = inResolution;
  const max = inMax;
  for (let elms = resolution; elms <= max; elms += resolution) {
    arr = Array.from(new Array(elms), (x, i) => i + 1);
    getRunTime(arr, ownReverse2);
  }
};

runTime(5000, 200000);
