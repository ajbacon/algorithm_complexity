const timer = require('../custom_modules/timerNode');
const { createArrayCsvWriter } = require('csv-writer');

const shuffledArrayTimer = async (
  active,
  fnc,
  outputFile,
  step = 50000,
  maxSize = 1000000,
  options = {}
) => {
  if (!active) {
    console.log(`${outputFile} has been skipped...`);
    return;
  }
  console.log(`creating results for ${outputFile}...`);
  outputArr = [];
  for (let elms = step; elms <= maxSize; elms += step) {
    let arr = Array.from(new Array(elms), (x, i) => i + 1);
    arr = shuffle(arr);
    time = timer(arr, fnc, options);
    outputArr.push([elms, time]);
  }
  createCsv(outputArr, outputFile);
  console.log('...done');
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

const createCsv = async (outputArr, outputFile) => {
  const csvWriter = createArrayCsvWriter({
    header: ['SIZE', 'TIME '],
    path: `csv_files/${outputFile}`,
  });

  await csvWriter.writeRecords(outputArr);
};

module.exports = shuffledArrayTimer;
