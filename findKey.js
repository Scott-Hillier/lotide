const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assert Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assert Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function (object, callback) {
  let y = Object.values(object);
  let z = 0;
  for (const value of y) {
    if (callback(value)) {
      let a = Object.keys(object);
      return a[z];
    }
    z += 1;
  }
};
