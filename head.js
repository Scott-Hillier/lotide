const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assert Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assert Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  if (array[0] === false) {
    return undefined;
  }
  return (array[0]);
};
