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


module.exports = findKey;