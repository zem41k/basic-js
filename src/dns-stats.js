const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let result = {};
  let arr = domains.map((el) => el.split('.').reverse());
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) {
        result[`.${arr[i].slice(0, 1)}`] = result[`.${arr[i].slice(0, 1)}`] + 1 || 1;
      } if (j === 1) {
        result[`.${arr[i].slice(0, 1)}.${arr[i].slice(j, j + 1)}`] = result[`.${arr[i].slice(0, 1)}.${arr[i].slice(j, j + 1)}`] + 1 || 1;
      } if (j === 2) {
        result[`.${arr[i].slice(0, 1)}.${arr[i].slice(j - 1, j)}.${arr[i].slice(j, j + 1)}`] = result[`.${arr[i].slice(0, 1)}.${arr[i].slice(j - 1, j)}.${arr[i].slice(j, j + 1)}`] + 1 || 1;
      }

    }
  }

  return result;
}


module.exports = {
  getDNSStats
};
