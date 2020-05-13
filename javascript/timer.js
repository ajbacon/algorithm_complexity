// const { performance } = require('perf_hooks');

const getRunTime = (arr, callback) => {
  'use strict';
  const n = 30;
  const trim = Math.floor(n * 0.2);
  let timeArr = [];
  for (let i = 0; i < n; i++) {
    const t0 = performance.now();
    callback(arr);
    const t1 = performance.now();
    timeArr.push(t1 - t0);
  }

  timeArr = timeArr.sort((a, b) => {
    return a - b;
  });
  timeArr = timeArr.slice(trim, timeArr.length - trim);
  const avg = timeArr.reduce((a, b) => a + b, 0) / timeArr.length;
  console.log(avg);
};

module.exports = getRunTime;
