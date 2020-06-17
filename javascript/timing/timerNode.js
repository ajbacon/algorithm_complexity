'use strict';
const { performance } = require('perf_hooks');

const getRunTime = (arr, fnc, options = {}) => {
  const n = options.iterations || 10;
  const trimPercentage = options.trimPercentage || 0.1;

  let timeArr = runTimer(arr, fnc, n);
  timeArr = trimOutliers(timeArr, n, trimPercentage);

  const avg = average(timeArr);
  console.log(avg);
};

const runTimer = (arr, fnc, n) => {
  let timeArr = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    fnc(arr);
    const t1 = performance.now();
    // first runs may be unstable, throw away first 5 results
    if (i > 4) {
      timeArr.push(t1 - t0);
    }
  }
  return timeArr;
};

const trimOutliers = (timeArr, n, trimPercentage) => {
  // very basic trim of both ends of the timings
  // Attempt to remove extreme, potentially erroneous readings
  const trim = Math.floor(n * trimPercentage);
  timeArr = timeArr.sort((a, b) => {
    return a - b;
  });
  timeArr = timeArr.slice(trim, timeArr.length - trim);
  return timeArr;
};

const average = (timeArr) => {
  return timeArr.reduce((a, b) => a + b, 0) / timeArr.length;
};

module.exports = getRunTime;
