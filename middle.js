const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assert Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assert Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};

const middle = function (array) {
  let x = [];
  let y = 0;
  if (array.length < 2) {
    return x;
  } else if (array.length % 2 === 0) {
    y = array.length / 2;
    x.push(array[y]);
    x.push(array[y - 1]);
    return x;
  } else {
    y = array.length / 2 - 0.5;
    x.push(array[y]);
    return x;
  }
};
