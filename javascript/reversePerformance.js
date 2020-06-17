// Time JavaScript native reverse function against my custom version

const jsNativeReverse = require('./algorithms/jsNativeReverse');
const shuffledArrayTimer = require('./helper_methods/shuffledArrayTimer');

timerOptions = { iterations: 35, trimPercentage: 0.2 };

shuffledArrayTimer(jsNativeReverse, 5000, 100000, timerOptions);
