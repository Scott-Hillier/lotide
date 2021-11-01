const findKeyByValue = function (object, input) {
  for (const key in object) {
    if (object[key] === input) {
      console.log(key);
      return key;
    }
  }
};

module.exports = findKeyByValue;
