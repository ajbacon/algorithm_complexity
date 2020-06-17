const { performance } = require('perf_hooks');

const getRunTime = (arr, callback) => {
  'use strict';
  const n = 35;
  const trim = Math.floor(n * 0.2);
  let timeArr = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    callback(arr);
    const t1 = performance.now();
    // throw away first 5 results
    if (i > 4) {
      timeArr.push(t1 - t0);
    }
  }
  const timeArr = trimOutliers(timeArr);
  const avg = average(timeArr);
  console.log(avg);
};

const trimOutliers = (timeArr) => {
  timeArr = timeArr.sort((a, b) => {
    return a - b;
  });
  timeArr = timeArr.slice(trim, timeArr.length - trim);
};

const average = (timeArr) => {
  return timeArr.reduce((a, b) => a + b, 0) / timeArr.length;
};

module.exports = getRunTime;
