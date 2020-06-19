'use strict';
// Time JavaScript native sort function against my custom version

const shuffledArrTimer = require('./helper_methods/shuffledArrayTimer');
const orderedArrTimer = require('./helper_methods/orderedArrayTimer');
const nativeSort = require('./algorithms/jsNativeSort');
const customQS = require('./algorithms/customQuickSort');
const customMS = require('./algorithms/customMergeSort');
const customSS = require('./algorithms/customSelectionSort');
const arraySort = require('array-sort');

// specify timing parameters
const options = { iterations: 35, trimPercentage: 0.2 };
const interval = 5000;
const maxSize = 200000;
let outFile = 'placeholder';

const runTimers = () => {
  // time native function
  outFile = 'jsNativeSort.csv';
  shuffledArrTimer(false, nativeSort, outFile, interval, maxSize, options);

  // time npm array-sort module
  outFile = 'arraySortModule.csv';
  shuffledArrTimer(false, arraySort, outFile, interval, maxSize, options);

  // time custom quicksort function
  outFile = 'customQuickSort.csv';
  shuffledArrTimer(false, customQS, outFile, interval, maxSize, options);

  // time custom mergesort function
  outFile = 'customMergeSort.csv';
  shuffledArrTimer(true, customMS, outFile, interval, maxSize, options);

  // time custom selection_sort function
  outFile = 'customSelectionSort.csv';
  shuffledArrTimer(false, customSS, outFile, interval, 30000, options);
};

runTimers();
