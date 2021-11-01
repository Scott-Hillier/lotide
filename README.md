# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @scotthillier/lotide`

**Require it:**

`const _ = require('@scotthillier/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: asserts that two arrays are equal
* `assertEqual`: asserts that two things are identical
* `assertObjectsEqual`: asserts that two objects are identical
* `countLetters`: counts the number of letters in a string
* `countOnly`: counts the number of relevant items in an object
* `eqArrays`: verifies that two strings are the same
* `eqObjects`: verifies that two objects are the same
* `findKey`: searches an object for a specific key
* `findKeyByValue`: given a value, this function will return the correlating key
* `flatten`: flattens an array
* `head`: returns the first element of an array
* `index`: used to access each function
* `letterPositions`: returns the exact position of each letter
* `map`: returns an new array with the same values as the input
* `middle`: returns the middle value(s) of an array as an array
* `tail`: returns an array missing the first element
* `takeUntil`: returns an array with the same values as the input until a specific element is met
* `without`: returns an array with the same values as the input without a specific element


