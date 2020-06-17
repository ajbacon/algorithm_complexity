'use strict';
// Time JavaScript native reverse function against my custom version

const shuffledArrayTimer = require('./helper_methods/shuffledArrayTimer');
const jsNativeReverse = require('./algorithms/jsNativeReverse');
const customReverse1 = require('./algorithms/customReverseNode_v1');

// specify timing parameters
const timerOptions = { iterations: 35, trimPercentage: 0.2 };
const interval = 5000;
const maxSize = 200000;
let outFile = 'placeholder';

const runTimers = () => {
  // time native function
  outFile = 'jsNativeReverse.csv';
  shuffledArrayTimer(jsNativeReverse, outFile, interval, maxSize, timerOptions);

  // time custom function
  outFile = 'customReverse1.csv';
  shuffledArrayTimer(customReverse1, outFile, interval, maxSize, timerOptions);
};

runTimers();
