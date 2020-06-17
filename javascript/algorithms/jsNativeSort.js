'use strict';

const jsNativeSort = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

module.exports = jsNativeSort;
