const middle = function (array) {
  let x = [];
  let y = 0;
  if (array.length <= 2) {
    return x;
  } else if (array.length % 2 === 0) {
    y = array.length / 2;
    x.push(array[y - 1]);
    x.push(array[y]);
    return x;
  } else {
    y = array.length / 2 - 0.5;
    x.push(array[y]);
    return x;
  }
};

module.exports = middle;