const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assert Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assert Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
