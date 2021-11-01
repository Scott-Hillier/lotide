const eqArrays = function (array1, array2) {
  if (JSON.stringify(array1) === JSON.stringify(array2)) {
    return true;
  } else {
    return false;
  }
};

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

module.exports = eqObjects;