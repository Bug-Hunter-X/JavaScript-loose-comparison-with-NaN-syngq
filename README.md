# JavaScript Loose Comparison with NaN

This repository demonstrates a common pitfall in JavaScript: the loose comparison operator (`==`) and its unexpected behavior when dealing with `NaN` (Not a Number).

## The Problem

In JavaScript, `NaN` is a special value representing an invalid number.  It's unique in that it's not equal to itself when using the loose equality operator (`==`).

The `bug.js` file contains a function that attempts to compare two values for equality using `==`. When both values are `NaN`, the function incorrectly returns `false`, even though they should be considered equal.

## The Solution

The correct way to compare `NaN` values is by using `Object.is()`. This method provides a strict equality comparison that correctly handles `NaN`. The solution is presented in `bugSolution.js`

## How to run the code

1. Clone this repository.
2. Open the `bug.js` and `bugSolution.js` file in a text editor or IDE.
3. Run the code using a JavaScript runtime environment (e.g., Node.js).

Note the difference in output.