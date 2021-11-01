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

console.log(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  )
); // => "noma"

module.exports = findKey;