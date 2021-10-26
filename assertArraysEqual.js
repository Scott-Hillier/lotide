const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assert Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assert Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  let x = eqArrays(array1, array2);
  if (x) {
    console.log(`👍 Assert Passed: ${array1} === ${array2}`);
  } else {
    console.log(`👎 Assert Failed: ${array1} !== ${array2}`);
  }
};
