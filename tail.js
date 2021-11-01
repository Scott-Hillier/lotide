const tail = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  let newArray = array.slice(1);
  return newArray;
};

module.exports = tail;