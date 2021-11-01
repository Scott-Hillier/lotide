const head = function(array) {
  if (array[0] === false) {
    return undefined;
  }
  return (array[0]);
};

module.exports = head;