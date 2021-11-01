const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true)
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false)
assertEqual(eqArrays(["Hello"], ["Hello"]), true)
assertEqual(eqArrays(["Hello"], ["Goodbye"]), false)