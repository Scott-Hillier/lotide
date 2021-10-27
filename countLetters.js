const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`👍 Assert Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎 Assert Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  for (const item of sentence) {
    if (item === " ") {
      continue;
    } else if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};
