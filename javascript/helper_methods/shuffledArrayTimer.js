const timer = require('../custom_modules/timerNode');

const shuffledArrayTimer = (
  fnc,
  step = 50000,
  maxSize = 1000000,
  options = {}
) => {
  for (let elms = step; elms <= maxSize; elms += step) {
    let arr = Array.from(new Array(elms), (x, i) => i + 1);
    arr = shuffle(arr);
    timer(arr, fnc, options);
  }
};

const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

module.exports = shuffledArrayTimer;
