const without = function(source, itemsToRemove) {
  let x = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      x.push(source[i]);
    }
  }
  return x;
};

module.exports = without;