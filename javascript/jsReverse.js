const getRunTime = require('./timer');

const jsShuffle = (arr) => {
  return arr.reverse();
};

getRunTime([1, 2, 3, 4], jsShuffle);
