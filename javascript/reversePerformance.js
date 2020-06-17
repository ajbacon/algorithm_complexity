'use strict';
// Time JavaScript native reverse function against my custom version

const shuffledArrayTimer = require('./helper_methods/shuffledArrayTimer');
const jsNativeReverse = require('./algorithms/jsNativeReverse');
const customReverse1 = require('./algorithms/customReverseNode_v1');

// specify timing parameters
const timerOptions = { iterations: 35, trimPercentage: 0.2 };
const interval = 5000;
const maxSize = 100000;

// time native function
shuffledArrayTimer(jsNativeReverse, interval, maxSize, timerOptions);

// time custom function
shuffledArrayTimer(customReverse1, interval, maxSize, timerOptions);
