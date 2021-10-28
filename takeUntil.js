const takeUntil = function (array, callback) {
  let y = [];
  for (const element of array) {
    if (callback(element)) {
      return y;
    }
    y.push(element);
  }
};
