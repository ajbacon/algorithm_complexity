const jsNativeReverse = require('./algorithms/jsNativeReverse');
const timer = require('./timing/timerNode');

timerOptions = { iterations: 35, trimPercentage: 0.2 };

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
timer(arr, jsNativeReverse, timerOptions);

// const runTime = (inResolution = 50000, inMax = 1000000) => {
//   const resolution = inResolution;
//   const max = inMax;
//   for (let elms = resolution; elms <= max; elms += resolution) {
//     let arr = Array.from(new Array(elms), (x, i) => i + 1);
//     timer(arr, jsReverse);
//   }
// };

// runTime();
// runTime(5000, 100000);
