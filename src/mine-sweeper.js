const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let resultArr = [];
  for (let i = 0; i < matrix.length; i++) {
    resultArr.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let num = 0;
      let a = i - 1;
      let b = j - 1;
      let c = i + 1;
      let d = j + 1;
      if (a >= 0 && b >= 0 && matrix[a][b] === true) num += 1;
      if (a >= 0 && matrix[a][j] === true) num += 1;
      if (a >= 0 && d < matrix[i].length && matrix[a][d]) num += 1;
      if (d < matrix[i].length && matrix[i][d] === true) num += 1;
      if (c < matrix.length && d < matrix[i].length && matrix[c][d] === true) num += 1;
      if (c < matrix.length && matrix[c][j] === true) num += 1;
      if (c < matrix.length && b >= 0 && matrix[c][b] === true) num += 1;
      if (b >= 0 && matrix[i][b] === true) num += 1;
      resultArr[i][j] = num;
    }
  }

  return resultArr;
};

module.exports = {
  minesweeper
};
