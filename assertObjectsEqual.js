const eqObjects = function (object1, object2) {
  let x = 0;
  let y = 0;
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (key of object1Keys) {
    for (keys of object2Keys) {
      if (keys === key) {
        x += 1;
      }
      if (object1[key] === object2[keys]) {
        y += 1;
      }
      if (
        Array.isArray(object1[key]) &&
        eqArrays(object1[key], object2[keys])
      ) {
        y += 1;
      }
    }
  }
  if (x === y) {
    return true;
  } else {
    return false;
  }
};

const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (actual === expected) {
    console.log(
      `👍 Assert Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `👎 Assert Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(eqObjects(ab, ba), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(eqObjects(ab, abc), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(eqObjects(cd, dc), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(eqObjects(cd, cd2), false)); // => false
