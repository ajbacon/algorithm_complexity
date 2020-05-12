const { performance } = require('perf_hooks');

const getRunTime = (arr, callback) => {
  'use strict';
  const t0 = performance.now();
  console.log(callback(arr));
  const t1 = performance.now();

  console.log((t1 - t0) / 1000);
};

module.exports = getRunTime;
