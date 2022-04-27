const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let result = [];
  let doubN = '--double-next';
  let discN = '--discard-next';
  let doubP = '--double-prev';
  let discP = '--discard-prev';
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  arr.map((el, i, arr) => {
    if (el === doubN && i === arr.length - 1 || el === doubP && i === 0 || el === discN && i === arr.length - 1 || el === discP && i === 0) {

    } else if ((el === doubP && arr[i - 2] === discN) || (el === discP && arr[i - 2] === discN)) {

    } else if (el === doubN) {
      result.push(arr[i + 1]);
    } else if (el === doubP && i !== 0) {
      result.push(arr[i - 1]);
    } else if (el === discP) {
      result.pop();
    } else if (arr[i - 1] === discN || el === discN) {

    } else {
      result.push(el);
    }
  })
  return result;
}

module.exports = {
  transform
};
