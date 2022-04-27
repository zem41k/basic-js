const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrayOfNumbers = String(n).split('').map(Number);
  let result = 0;
  arrayOfNumbers.map((el, i) => {
    let arr = arrayOfNumbers.slice();
    arr.splice(i, 1);
    let sameResult = Number(arr.join(''));
    if (sameResult > result) result = sameResult;
    return;
  })
  return result;
}

module.exports = {
  deleteDigit
};
