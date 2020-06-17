'use strict';
// Time JavaScript native sort function against my custom version

const shuffledArrayTimer = require('./helper_methods/shuffledArrayTimer');
const jsNativeSort = require('./algorithms/jsNativeSort');
const customQuickSort = require('./algorithms/customQuickSort');
const arraySort = require('array-sort');

// specify timing parameters
const timerOptions = { iterations: 35, trimPercentage: 0.2 };
const interval = 5000;
const maxSize = 200000;
let outFile = 'placeholder';

const runTimers = () => {
  // time native function
  outFile = 'jsNativeSort.csv';
  shuffledArrayTimer(jsNativeSort, outFile, interval, maxSize, timerOptions);

  // time npm array-sort module
  outFile = 'arraySortModule.csv';
  shuffledArrayTimer(arraySort, outFile, interval, maxSize, timerOptions);

  // time custom quicksort function
  outFile = 'customQuickSort.csv';
  shuffledArrayTimer(customQuickSort, outFile, interval, maxSize, timerOptions);
};

runTimers();
