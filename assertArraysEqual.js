const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let x = eqArrays(array1, array2);
  if (x) {
    console.log(`👍 Assert Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assert Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
