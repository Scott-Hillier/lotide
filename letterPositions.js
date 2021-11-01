const letterPositions = function (sentence) {
  const result = {};
  let x = 0;
  array = [];
  for (const item of sentence) {
    if (item === " ") {
      x += 1;
      continue;
    } else if (result[item]) {
      result[item].push(x);
    } else {
      result[item] = [];
      result[item].push(x);
    }
    x += 1;
  }
  return result;
};

const sentence = "lighthouse in the house";

console.log(letterPositions(sentence));

module.exports = letterPositions;